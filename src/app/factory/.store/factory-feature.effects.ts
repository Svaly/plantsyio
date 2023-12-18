import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { FactoryFeatureState } from "./factory-feature.state";
import { Injectable } from "@angular/core";
import * as actions from './factory-feature.actions';
import { catchError, map, mergeMap, of, switchMap, take, tap } from "rxjs";
import { PlantListService } from "../factory-plants-list/service-plants-list/plants-list.service";

@Injectable()
export class FactoryFeatureEffects {

  loadPlants$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadAllPlants),
    switchMap((s) => this.plantListService.getAllPlants().pipe(
        map(plants => actions.loadAllPlantsSuccess({ plants, isLoading: false })),
        catchError(error => of(actions.loadAllPlantsFailed({ error, isLoading: false })))
    ))));


  constructor(
    private store: Store<FactoryFeatureState>,
    private actions$: Actions,
    private plantListService: PlantListService
  ) {
  }
}
