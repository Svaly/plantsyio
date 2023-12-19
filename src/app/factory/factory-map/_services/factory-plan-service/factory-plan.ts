import { PlantBed } from './garden-bed';
import { Room } from './room';

export interface FactoryPlan {
  rows: PlantBed[][];
  centralRoom: Room;
}
