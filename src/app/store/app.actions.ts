/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';


export const appReducer = createReducer<AppState, Action>(
  initialQaConfigState,
);
