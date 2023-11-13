import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const globalStateFeature = createFeatureSelector<AppState>('appStateKey');

export const selectFactoryPlan = createSelector(
  globalStateFeature,
  (state: AppState) => state?.factoryPlan
);

export const selectFactoryPlanRows = createSelector(
  globalStateFeature,
  (state: AppState) => state?.factoryPlan?.rows
);

export const selectFactoryName = createSelector(
  globalStateFeature,
  (state: AppState) => {

    if(state?.factoryPlan) {
      return state.factoryPlan.rows;
    }
    return '';
  }
);


