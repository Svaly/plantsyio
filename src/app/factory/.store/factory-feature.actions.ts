import { createAction, props } from '@ngrx/store';
import { PlantBed } from '../factory-map/_services/factory-plan-service/garden-bed';
import { IsLoading } from './IsLoading';
import { PlantListItem } from '../factory-plants-list/_services/plants-list-service/plant.model';
import { Plant } from './factory-feature.state.models';

export const updatePlantBed = createAction(
  '[Factory Plan] Update PlantBed',
  props<{ updatedArea: PlantBed; } & IsLoading>());

export const createPlantBed = createAction(
  '[Factory Plan] Create PlantBed',
  props<{ newArea: PlantBed; } & IsLoading>());

export const createPlantBedSuccess = createAction(
  '[Factory Plan] Create PlantBed Success',
  props<{ newArea: PlantBed; } & IsLoading>());

export const createPlantBedFailed = createAction(
  '[Factory Plan] Create PlantBed Failed',
  props<{ error: any; } & IsLoading>());


/** Plants */
/* List */
export const loadPlantsList = createAction(
  '[Factory Plants] Load plants list',
  props<IsLoading>());

export const loadPlantsListSuccess = createAction(
  '[Factory Plants] Load plants list success',
  props<{ plants: PlantListItem[] } & IsLoading>());

export const loadPlantsListFailed = createAction(
  '[Factory Plants] Load plants list failed',
  props<{ error: any; } & IsLoading>());

/** Plants */
/* Management */
export const startPlantCreation = createAction(
  '[Factory Plants] Start plant creation',
  props<{ plantId: string; }>());

export const updatePlant = createAction(
  '[Factory Plants] Update plant',
  props<{ plant: Plant; }>());

export const storePantInBackend = createAction(
  '[Factory Plants] Store plant in backend',
  props<{ plant: Plant; }>());

export const storePantInBackendSuccess = createAction(
  '[Factory Plants] Store plant in backend success',
  props<{ plant: Plant; }>());

export const storePantInBackendFailed = createAction(
  '[Factory Plants] Store plant in backend failed',
  props<{ error: any; }>());

export const loadPlant = createAction(
  '[Factory Plants] Load plant',
  props<{ plantId: string; }>());

export const loadPlantSuccess = createAction(
  '[Factory Plants] Load plant success',
  props<{ plant: Plant; }>());

export const loadPlantFailed = createAction(
  '[Factory Plants] Load plant failed',
  props<{ error: any; }>());
