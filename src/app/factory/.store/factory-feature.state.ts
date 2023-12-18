import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { FactoryPlan } from '../factory-map/service-factory-plan/factory-plan';
import { Plant } from '../factory-plants-list/service-plants-list/plant.model';

/* Plants Entity */
export interface PlantState extends EntityState<Plant> {/*additional state property if needed */ }
export const plantEntityAdapter: EntityAdapter<Plant> = createEntityAdapter<Plant>(
  {
    selectId: (plant: Plant) => plant.id,
  }
);
export const initialPlantState: PlantState = plantEntityAdapter.getInitialState({ /*additional state property if needed */ });

/** Feature State definition */
export interface FactoryFeatureState {
  factoryPlan: FactoryPlan,
  plants: PlantState;
}

/** Initial Feature state */
export const initialState: FactoryFeatureState = {
  plants: initialPlantState,
  factoryPlan: {
    rows: [
      [
        { id:1, name: 'Plant Area 1', classes: 'col-md-5 plant-area', soilMoisture: 55 },
        { id:2,  name: '', classes: 'col-md-2 path' },
        { id:3,  name: 'Plant Area 2', classes: 'col-md-5 plant-area' , soilMoisture: 55}
      ],
      [
        { id:4, name: 'Plant Area 1', classes: 'col-md-5 plant-area' , soilMoisture: 11},
        { id:5,  name: '', classes: 'col-md-2 path' },
        { id:6,  name: 'Plant Area 2', classes: 'col-md-5 plant-area' , soilMoisture: 53}
      ],
      [
        { id:7, name: 'Plant Area 1', classes: 'col-md-5 plant-area', soilMoisture: 87 },
        { id:8,  name: '', classes: 'col-md-2 path' },
        { id:9, name: 'Plant Area 2', classes: 'col-md-5 plant-area', soilMoisture: 45 }
      ],
      // Repeat this structure for additional rows as needed
    ],
    centralRoom: { name: 'Central Room' }
  }
};
