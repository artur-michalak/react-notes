import { createAction, createReducer } from "@reduxjs/toolkit";

type DialogDefault = {
  note?: string;
  isTask: boolean;
  id?: string;
};
export const dialogDefault: DialogDefault = {
  note: undefined,
  isTask: false,
  id: undefined,
};
const setDialog = createAction<DialogDefault>("dialog/set");

const reducer = createReducer(dialogDefault, (builder) => {
  builder.addCase(setDialog, (state, action) => {
    state.id = action.payload.id;
    state.isTask = action.payload.isTask;
    state.note = action.payload.note;
  });
});

export default reducer;
