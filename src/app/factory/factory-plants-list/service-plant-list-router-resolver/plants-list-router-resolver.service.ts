// plants-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError, first, single, mergeMap } from 'rxjs/operators';
import * as actions from '../../.store/factory-feature.actions';
import * as selectors from '../../.store/factory-feature.selectors';
import { FactoryFeatureState } from '../../.store/factory-feature.state';

@Injectable({ providedIn: 'root' })
export class PlantsResolverService implements Resolve<boolean> {

  constructor(private store: Store<FactoryFeatureState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectors.selectAllPlants)
      .pipe(
        take(1),
        tap(plants => {
          if (plants.length <= 0) {
            this.store.dispatch(actions.loadAllPlants({ isLoading: true }));
          }
        }),
        mergeMap(() => {
          console.log('Success loading plants');
          return of(true);
        }),
        catchError(() => {
          console.log('Error loading plants');
          return of(false)
        })
      );
  }
}
