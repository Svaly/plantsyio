/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';
import * as appActions from './app.actions';
import * as lodash from 'lodash';

export const appReducer = createReducer<AppState, Action>(
  initialState,
  on(appActions.logIn, (state) => state),
);
