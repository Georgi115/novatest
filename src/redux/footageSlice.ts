import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const footageSlice = createSlice({
  name: "sliderSlice",
  initialState: {
    count: [""],
    maxCount: 4,
    loading: false,
  },
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
