import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaterManagementService {

  private rainWaterLevelSubject = new BehaviorSubject<number>(100); // Starting with 0 as default
  rainWaterLevel$ = this.rainWaterLevelSubject.asObservable();

  constructor() {}

  waterThePlants(areaId: number): void {
    const currentLevel = this.rainWaterLevelSubject.getValue();
    this.rainWaterLevelSubject.next(Math.max(0, currentLevel - 10));
  }

  getWaterLevel(): Observable<number> {
    return this.rainWaterLevelSubject;
  }
}
