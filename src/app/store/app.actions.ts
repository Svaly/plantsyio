import { createAction, props } from '@ngrx/store';
import { Area } from '../map-view/factory-plan-service';


export const updateArea = createAction(
  '[Factory Plan] Update Area',
  props<{ updatedArea: Area; }>());
