import type { Action as ReduxAction } from "redux";
import { rootReducer } from "./reducer";

export interface Observer<T> {
  isLoading: boolean;
  content?: T;
  error?: boolean;
}

export interface Action<T, D extends string = string> extends ReduxAction<D> {
  payload?: T;
}

export type Reducer<S = any> = (state: S | undefined, action: Action<S>) => S;

export type State = ReturnType<typeof rootReducer>;
