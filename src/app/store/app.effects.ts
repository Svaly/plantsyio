import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { Injectable } from "@angular/core";
import * as actions from './app.actions';
import { concatMap, exhaustMap, firstValueFrom, map } from "rxjs";
import { FactoryPlanService } from "../map-view/factory-plan-service";

@Injectable()
export class AppEffects {

  onCreateArea$ = createEffect(() => this.actions$.pipe(
    ofType(actions.createArea),
    exhaustMap(async (value) => {
      try
      {
        const result = await firstValueFrom(this.factoryPlanService.saveArea(value.newArea));
        return actions.createAreaSuccess({ newArea: value.newArea });
      }
      catch(error)
      {
        return actions.createAreaFailed({ error });
      }
    })
  ));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private factoryPlanService: FactoryPlanService
  ) {

  }

}
