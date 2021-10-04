import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormSlice {
  city: string;
  name: string;
  matrix: string;
  email: string;
  text: string;
  checked: boolean;
  error: boolean;
  viewDropBlock: boolean;
  i: number;
}
const initialState: IFormSlice = {
  city: "Выберите город",
  name: "",
  matrix: "+7(___)___-__-__",
  email: "",
  text: "",
  checked: false,
  error: false,
  viewDropBlock: false,
  i: 1,
};
const FormSlice = createSlice({
  name: "FormSlice",
  initialState,
  reducers: {
    changeInputPhone(state, action: PayloadAction<string>) {
      const matrix = "+7(___)___-__-__";
      const numberValue = action.payload.match(/\d/g);
      const numberMatrix = state.matrix.match(/[_\d]/g);
      const max = action.payload.match(/[_\d]/g);

      if (!max![numberMatrix!.length - 1]) {
        state.matrix = matrix;
        return;
      }

      if (numberMatrix!.length < numberValue!.length) return;

      if (numberValue![numberValue!.length - 1]) {
        state.matrix = state.matrix.replace(
          /_/,
          numberValue![numberValue!.length - 1]
        );
        state.i++;
      }
    },
    changeInputName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    ClickInputCity(state, action: PayloadAction) {
      state.viewDropBlock = !state.viewDropBlock;
    },
    changeEmailInput(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changeTextInput(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    changeCheckedInput(state, action: PayloadAction<boolean>) {
      state.checked = action.payload;
    },
    clickCity(state, action: PayloadAction<any>) {
      state.city = action.payload.textContent;
      state.viewDropBlock = false;
    },
    submitClicked(state, action: PayloadAction) {
      const matrix = state.matrix.match(/\d/g);
      if (
        (state.city =
          "Выберите город" ||
          state.email.trim() === "" ||
          state.name === "".trim() ||
          state.checked === false) ||
        matrix?.length !== 11
      ) {
        state.error = true;
      }
    },
  },
});

export default FormSlice.reducer;
export const {
  changeInputPhone,
  changeInputName,
  ClickInputCity,
  changeEmailInput,
  changeTextInput,
  changeCheckedInput,
  submitClicked,
  clickCity,
} = FormSlice.actions;
