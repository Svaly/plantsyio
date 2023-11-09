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
