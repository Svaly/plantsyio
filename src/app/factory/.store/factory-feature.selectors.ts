import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FactoryFeatureState, PlantState, plantEntityAdapter } from './factory-feature.state';

export const factoryFeatureState = createFeatureSelector<FactoryFeatureState>('factoryFeature');

/**Factory plan selectors */
export const selectFactoryPlan = createSelector(
  factoryFeatureState,
  (state: FactoryFeatureState) => state?.factoryPlan
);

export const selectFactoryPlanRows = createSelector(
  factoryFeatureState,
  (state: FactoryFeatureState) => state?.factoryPlan?.rows
);

export const selectFactoryName = createSelector(
  factoryFeatureState,
  (state: FactoryFeatureState) => {

    if(state?.factoryPlan) {
      return state.factoryPlan.rows;
    }
    return '';
  }
);


/**Plant selectors */
const { selectIds, selectEntities, selectAll, selectTotal } = plantEntityAdapter.getSelectors<FactoryFeatureState>(state => state.plants);

export const selectPlantIds = createSelector(factoryFeatureState, selectIds);
export const selectPlantEntities = createSelector(factoryFeatureState, selectEntities);
export const selectAllPlants = createSelector(factoryFeatureState, selectAll);
export const selectPlantsTotal = createSelector(factoryFeatureState, selectTotal);
