import { createAction, props } from '@ngrx/store';
import { Area } from '../map-view/factory-plan-service';


export const updateArea = createAction(
  '[Factory Plan] Update Area',
  props<{ updatedArea: Area; }>());

export const createArea = createAction(
  '[Factory Plan] Create Area',
  props<{ newArea: Area; }>());

export const createAreaSuccess = createAction(
  '[Factory Plan] Create Area Success',
  props<{ newArea: Area; }>());


export const createAreaFailed = createAction(
  '[Factory Plan] Create Area Failed',
  props<{ error: any; }>());


