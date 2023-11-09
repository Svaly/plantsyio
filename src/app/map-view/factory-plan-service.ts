import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

export interface Area {
  id: number;
  name: string;
  classes: string;
  soilMoisture?: number | undefined;
}

export interface Room {
  content: string;
  classes: string;
}

export interface FactoryPlanServiceData {
  rows: Area[][];
  centralRoom: Room;
}

@Injectable({
  providedIn: 'root'
})
export class FactoryPlanService {
  private dataSubject = new BehaviorSubject<FactoryPlanServiceData>({
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
    centralRoom: { content: 'Central Room', classes: 'col-md-4 room' }
  });

  constructor() {}

  getFactoryPlanData(): Observable<FactoryPlanServiceData> {
    return this.dataSubject.asObservable().pipe(delay(1000));
  }

  updateArea(areaId: number, newName: string): void {
    const currentData = this.dataSubject.getValue();
    let updated = false;

    for (const row of currentData.rows) {
      for (const area of row) {
        if (area.id === areaId) {
          area.name = newName;
          updated = true;
          break;
        }
      }
      if (updated) break;
    }

    if (updated) {
      this.dataSubject.next(currentData);
    }
  }
}
