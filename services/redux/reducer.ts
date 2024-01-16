import { combineReducers } from "redux";
import { dialogReducer } from "./reducers";

export const rootReducer = combineReducers({
  dialogReducer,
});
