/* eslint-disable @typescript-eslint/naming-convention */
import { Action, createReducer, on } from '@ngrx/store';
import { FactoryFeatureState, PlantEntity, initialState } from './factory-feature.state';
import * as actions from './factory-feature.actions';
import * as lodash from 'lodash';
import { plantEntityAdapter } from './factory-feature.state';
import { Plant } from './factory-feature.state.models';

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

  on(actions.loadPlantsList, (state) => {
    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plantsListLoading: true
    };
  }),

  on(actions.loadPlantsListSuccess, (state, { plants }) => {
    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plantsList: plants,
      plantsListLoading: false

    };
  }),

  on(actions.startPlantCreation, (state, { plantId }) => {
    const plant: Plant = {
      id: plantId,
      picture: '',
      name: '',
      plantBedId: -1,
      amount: -1,
      condition: '',
      developmentPhase: '',
      plantingDate: new Date(),
      harvestDate: new Date(),
    };

    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plants: plantEntityAdapter.upsertOne({ isDraft: true, plant: plant }, newState.plants)
    };
  }),

  on(actions.updatePlant, (state, { plant }) => {
    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plants: plantEntityAdapter.upsertOne({ isDraft: true, plant: plant }, newState.plants)
    };
  }),

  on(actions.storePantInBackendSuccess, (state, { plant }) => {
    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plants: plantEntityAdapter.upsertOne({ isDraft: false, plant: plant }, newState.plants)
    };
  }),

  on(actions.loadPlantSuccess, (state, { plant }) => {
    let newState = lodash.cloneDeep(state);

    return {
      ...newState,
      plants: plantEntityAdapter.upsertOne({ isDraft: false, plant: plant }, newState.plants)
    };
  }),

);
