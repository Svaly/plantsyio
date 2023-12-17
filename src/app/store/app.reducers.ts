/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';
import * as AppActions from './app.actions';
import * as lodash from 'lodash';

export const appReducer = createReducer<AppState, Action>(
  initialState,

  on(AppActions.updateArea, (state, { updatedArea }) => {
    let newState = lodash.cloneDeep(state);

    newState.factoryPlan.rows.forEach(row => {
      let areaToUpdate = row.find(area => area.id === updatedArea.id);
      if (areaToUpdate) {
        areaToUpdate.name = updatedArea.name;
      }
    });


    return newState;
  }),

  on(AppActions.createArea, (state, { newArea }) => {
    let newState = lodash.cloneDeep(state);
    newState.isLoading = true;
    return newState;
  }),

  on(AppActions.createAreaSuccess, (state, { newArea }) => {
    let newState = lodash.cloneDeep(state);
    newState.isLoading = false;
    newState.factoryPlan.rows[0].push(newArea);
    return newState;
  }),

  on(AppActions.createAreaFailed, (state, { error }) => {
    let newState = lodash.cloneDeep(state);
    newState.isLoading = false;
    return newState;
  }),
);
