import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";

import { isEnv } from "@/utils";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer as reducer } from "./reducer";
import { Action, State } from "./interface";

const logger = createLogger({
  collapsed: (_getState, _action, logEntry) => !logEntry?.error,
});

const isDev = isEnv("development");
const epicMiddleware = createEpicMiddleware<
  Action<unknown>,
  Action<unknown>,
  State
>();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const mid = getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(epicMiddleware);
    if (isDev) {
      mid.concat(logger);
    }
    return mid;
  },
  devTools: isDev,
});

export const makeStore = () => store;
