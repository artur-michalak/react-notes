import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer as reducer } from './reducer';

const logger = createLogger({
  collapsed: (_getState, _action, logEntry) => !logEntry?.error,
});

const isDev = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const mid = getDefaultMiddleware();
    if (isDev === true) {
      mid.concat(logger);
    }
    return mid;
  },
  devTools: isDev,
});

export const makeStore = () => store;
