import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take, catchError, timeout, filter, switchMap } from 'rxjs/operators';
import * as selectors from '../../../.store/factory-feature.selectors';
import { FactoryFeatureState } from '../../../.store/factory-feature.state';
import * as routerActions from '../../../../.store/router/router.actions';

@Injectable({ providedIn: 'root' })
export class PlantCreateGuardService implements CanActivate {

  constructor(private store: Store<FactoryFeatureState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const plantId = route.paramMap.get('plantId');

    if (plantId === null || plantId === undefined) {
      this.store.dispatch(routerActions.navigate({ path: ['plants'] }));
      return of(false);
    }

    return this.store.select(selectors.selectPlantEntities).pipe(
      timeout(100),
      map(entities => !!entities[plantId]),
      filter(plantExists => plantExists === true),
      switchMap(() => of(true)),
      catchError(() => {
        this.store.dispatch(routerActions.navigate({ path: ['plants'] }));
        return of(false);
      })
    );
  }
}
