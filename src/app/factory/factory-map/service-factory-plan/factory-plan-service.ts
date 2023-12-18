import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PlantBed } from './garden-bed';

@Injectable({
  providedIn: 'root'
})
export class FactoryPlanService {

  constructor() {}

  public saveArea(gardenBed: PlantBed): Observable<any>{
    return of(1).pipe(delay(1000));
  }
}
