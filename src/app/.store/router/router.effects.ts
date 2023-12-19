// navigation.effects.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as NavigationActions from './router.actions';

@Injectable()
export class RouterEffects {

  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NavigationActions.navigate),
      tap(({ path, queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras });
      })
    ),
    { dispatch: false } // No new action is dispatched by this effect
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
