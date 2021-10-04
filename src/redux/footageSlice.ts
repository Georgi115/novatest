import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFootageSlice {
  count: string[];
  maxCount: number;
  loading: boolean;
}

const initialState: IFootageSlice = {
  count: [""],
  maxCount: 4,
  loading: false,
};

const footageSlice = createSlice({
  name: "sliderSlice",
  initialState,
  reducers: {
    changeCount(state, action: PayloadAction) {
      state.loading = false;
      state.count.push("");
    },
    changeLoading(state, action: PayloadAction) {
      state.loading = true;
    },
  },
});

export default footageSlice.reducer;
export const { changeCount, changeLoading } = footageSlice.actions;
