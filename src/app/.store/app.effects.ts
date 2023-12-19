import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { filter, tap } from "rxjs";
import * as actions from './app.actions';

@Injectable()
export class AppEffects {

  // checkIsLoading$ = createEffect(() =>
  //   this.actions$.pipe(
  //     filter((action: any) => action.hasOwnProperty('isLoading')),
  //     tap((action: any) => {
  //       if (action.isLoading === true) {
  //         return actions.loadingStarted();
  //       }
  //       else
  //       {
  //         return actions.loadingComplete();
  //       }
  //     })
  //   )
  // );


  constructor(private store: Store<AppState>,
    private actions$: Actions,) {
  }
}
