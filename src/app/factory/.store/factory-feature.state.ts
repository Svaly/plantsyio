import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { FactoryPlan } from '../factory-map/_services/factory-plan-service/factory-plan';
import { PlantListItem } from '../factory-plants-list/_services/plants-list-service/plant.model';
import { Plant } from './factory-feature.state.models';

export interface PlantEntity {
  isDraft: boolean;
  plant: Plant;
}

export interface FactoryFeatureState {
  factoryPlan: FactoryPlan,

  plantsListLoading: boolean;
  plantsList: PlantListItem[];

  plants: EntityState<PlantEntity>;
}

export const plantEntityAdapter: EntityAdapter<PlantEntity> = createEntityAdapter<PlantEntity>(
  {
    selectId: (plantEntity: PlantEntity) => plantEntity.plant.id,
  }
);

/** Initial Feature state */
export const initialState: FactoryFeatureState = {
  plants: plantEntityAdapter.getInitialState(),

  plantsListLoading: false,
  plantsList: [],

  factoryPlan: {
    rows: [
      [
        { id: 1, name: 'Plant Area 1', classes: 'col-md-5 plant-area', soilMoisture: 55 },
        { id: 2, name: '', classes: 'col-md-2 path' },
        { id: 3, name: 'Plant Area 2', classes: 'col-md-5 plant-area', soilMoisture: 55 }
      ],
      [
        { id: 4, name: 'Plant Area 1', classes: 'col-md-5 plant-area', soilMoisture: 11 },
        { id: 5, name: '', classes: 'col-md-2 path' },
        { id: 6, name: 'Plant Area 2', classes: 'col-md-5 plant-area', soilMoisture: 53 }
      ],
      [
        { id: 7, name: 'Plant Area 1', classes: 'col-md-5 plant-area', soilMoisture: 87 },
        { id: 8, name: '', classes: 'col-md-2 path' },
        { id: 9, name: 'Plant Area 2', classes: 'col-md-5 plant-area', soilMoisture: 45 }
      ],
      // Repeat this structure for additional rows as needed
    ],
    centralRoom: { name: 'Central Room' }
  }
};
