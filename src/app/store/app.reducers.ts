/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';
import * as AppActions from './app.actions';

export const appReducer = createReducer<AppState, Action>(
  initialState,

  on(AppActions.updateArea, (state, { updatedArea }) => {
    const newState = { ...state };

    for (const row of newState.factoryPlan.rows) {
      for (const area of row) {
        if (area.id === updatedArea.id) {
          area.name = updatedArea.name;
          break;
        }
      }
    }

    return newState;
  }),
);
