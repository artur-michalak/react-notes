import { createAction, createReducer } from "@reduxjs/toolkit";

type ModalDefault = {
  note?: string;
  id?: string;
};
export const modalDefault: ModalDefault = {
  note: undefined,
  id: undefined,
};
const setModal = createAction<ModalDefault>("modal/set");

const reducer = createReducer(modalDefault, (builder) => {
  builder.addCase(setModal, (state, action) => {
    state.id = action.payload.id;
    state.note = action.payload.note;
  });
});

export default reducer;
