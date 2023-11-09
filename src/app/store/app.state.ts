import { FactoryPlan } from '../map-view/factory-plan-service';

export interface AppState {
  isLoading: boolean;
  factoryPlan: FactoryPlan
}

export const initialState: AppState = {
  isLoading: false,
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
