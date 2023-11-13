import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

export interface Area {
  id: number;
  name: string;
  classes: string;
  soilMoisture?: number | undefined;
}

export interface Room {
  name: string;
}

export interface FactoryPlan {
  rows: Area[][];
  centralRoom: Room;
}

@Injectable({
  providedIn: 'root'
})
export class FactoryPlanService {

  constructor() {}

  public saveArea(area: Area): Observable<any>{
    return of(1).pipe(delay(1000));
  }
}
