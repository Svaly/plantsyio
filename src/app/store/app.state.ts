import { FactoryPlan } from '../map-view/factory-plan-service';

export interface AppState {
  isLoading: boolean;
  factoryPlan: FactoryPlan
}

export const initialQaConfigState: AppState = {
  isLoading: false,
  factoryPlan: {
    rows:[],
    centralRoom: { name: 'Central Room' }
  }
};
