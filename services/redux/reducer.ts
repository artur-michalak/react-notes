import { combineReducers } from "redux";
import { dialog, modal } from "./reducers";

export const rootReducer = combineReducers({
  dialog,
  modal,
});
