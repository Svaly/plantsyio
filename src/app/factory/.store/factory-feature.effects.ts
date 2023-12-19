import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { FactoryFeatureState } from "./factory-feature.state";
import { Injectable } from "@angular/core";
import * as actions from './factory-feature.actions';
import { catchError, map, of, switchMap } from "rxjs";
import { PlantListService } from "../factory-plants-list/_services/plants-list-service/plants-list.service";

@Injectable()
export class FactoryFeatureEffects {

  loadPlantsList$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadPlantsList),
    switchMap((s) => this.plantListService.getAllPlants().pipe(
      map(plants => actions.loadPlantsListSuccess({ plants, isLoading: false })),
      catchError(error => of(actions.loadPlantsListFailed({ error, isLoading: false })))
    ))));

    storePlant$ = createEffect(() => this.actions$.pipe(
      ofType(actions.loadPlant),
      switchMap((action) =>
        this.plantListService.getPlant(action.plantId).pipe(
          map(plant => actions.loadPlantSuccess({ plant })),
          catchError(error => of(actions.loadPlantFailed({ error })))
        ))));

  storePlantInBackend$ = createEffect(() => this.actions$.pipe(
    ofType(actions.storePantInBackend),
    switchMap((action) =>
      this.plantListService.addPlant(action.plant).pipe(
        map(plant => actions.storePantInBackendSuccess({ plant })),
        catchError(error => of(actions.storePantInBackendFailed({ error })))
      ))));

  constructor(
    private store: Store<FactoryFeatureState>,
    private actions$: Actions,
    private plantListService: PlantListService
  ) {
  }
}
