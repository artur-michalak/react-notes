import { createAction, createReducer } from "@reduxjs/toolkit";

type DialogDefault = {
  content?: string;
  isTask: false;
  id?: string;
};
const dialogDefault: DialogDefault = {
  content: undefined,
  isTask: false,
  id: undefined,
};
const setDialog = createAction<DialogDefault>("SET_DIALOG");

const reducer = createReducer(dialogDefault, (builder) => {
  builder.addCase(setDialog, (state, action) => {
    state = { ...dialogDefault, ...action.payload };
  });
});

export default reducer;
