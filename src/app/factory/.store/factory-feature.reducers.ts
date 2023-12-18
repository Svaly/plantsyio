/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { FactoryFeatureState, initialState } from './factory-feature.state';
import * as actions from './factory-feature.actions';
import * as lodash from 'lodash';
import { plantEntityAdapter, PlantState } from './factory-feature.state';

export const factoryFeatureReducers = createReducer<FactoryFeatureState, Action>(
  initialState,

  on(actions.updatePlantBed, (state, { updatedArea }) => {
    let newState = lodash.cloneDeep(state);

    newState.factoryPlan.rows.forEach(row => {
      let areaToUpdate = row.find(area => area.id === updatedArea.id);
      if (areaToUpdate) {
        areaToUpdate.name = updatedArea.name;
      }
    });

    return newState;
  }),

  on(actions.createPlantBed, (state, { newArea }) => {
    let newState = lodash.cloneDeep(state);
    return newState;
  }),

  on(actions.createPlantBedSuccess, (state, { newArea }) => {
    let newState = lodash.cloneDeep(state);
    newState.factoryPlan.rows[0].push(newArea);
    return newState;
  }),

  on(actions.createPlantBedFailed, (state, { error }) => {
    let newState = lodash.cloneDeep(state);
    return newState;
  }),

  on(actions.loadAllPlantsSuccess, (state, { plants }) => {
    let newState = lodash.cloneDeep(state);
    return {
      ...newState,
      plants: plantEntityAdapter.setAll(plants, newState.plants)
    };
  }),

);
