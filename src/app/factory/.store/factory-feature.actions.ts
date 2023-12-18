import { createAction, props } from '@ngrx/store';
import { PlantBed } from '../factory-map/service-factory-plan/garden-bed';
import { IsLoading } from './IsLoading';
import { Plant } from '../factory-plants-list/service-plants-list/plant.model';

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
export const loadAllPlants = createAction(
'[Factory Plants] Load all plants',
props<IsLoading>());

export const loadAllPlantsSuccess = createAction(
'[Factory Plants] Load all plants success',
props<{ plants: Plant[] } & IsLoading>());

export const loadAllPlantsFailed = createAction(
'[Factory Plants] Load all plants failed',
props<{ error: any; } & IsLoading>());
