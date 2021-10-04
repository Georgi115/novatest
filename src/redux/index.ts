import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./sliderSlice";
import footageSlice from "./footageSlice";
import FormSlice from "./FormSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  sliderSlice,
  footageSlice,
  FormSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
