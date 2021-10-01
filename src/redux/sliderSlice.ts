import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { castArray } from "../data/data";
const widthScreen = window.outerWidth;
let maxPosition = 0;
if (widthScreen > 1000) {
  maxPosition = castArray.length + 1 - 4;
}
if (widthScreen <= 1000) {
  maxPosition = castArray.length + 1 - 2;
}
if (widthScreen < 450) {
  maxPosition = castArray.length;
}

export interface ICastArr {
  actorName: string;
  characterName: string;
  img: any;
  description: string;
}

export interface IChangePosition {
  positionCastPhoto: number;
  num: number;
  widthProgressStripe: number;
}

export interface ISliderSlice {
  position: number;
  maxPosition: number;
  castArray: ICastArr[];
  widthScreen: number;
  positionCastPhoto: number;
  widthProgressStripe: number;
}

const initialState: ISliderSlice = {
  position: 1,
  maxPosition,
  castArray,
  widthScreen,
  positionCastPhoto: 0,
  widthProgressStripe: 0,
};

const sliderSlice = createSlice({
  name: "sliderSlice",
  initialState: initialState,
  reducers: {
    changePosition(state, action: PayloadAction<IChangePosition>) {
      if (
        action.payload.num + state.position > state.maxPosition ||
        action.payload.num + state.position < 1
      ) {
        return;
      }
      state.position = state.position + action.payload.num;
      state.positionCastPhoto =
        state.positionCastPhoto + action.payload.positionCastPhoto;
      state.widthProgressStripe =
        state.widthProgressStripe + action.payload.widthProgressStripe;
    },
  },
});

export default sliderSlice.reducer;
export const { changePosition } = sliderSlice.actions;
