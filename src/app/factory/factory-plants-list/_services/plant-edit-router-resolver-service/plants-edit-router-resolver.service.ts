// plants-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, catchError, map, switchMap, timeout, filter } from 'rxjs/operators';
import { FactoryFeatureState } from '../../../.store/factory-feature.state';
import * as actions from '../../../.store/factory-feature.actions';
import * as selectors from '../../../.store/factory-feature.selectors';
import * as routerActions from '../../../../.store/router/router.actions';

@Injectable({ providedIn: 'root' })
export class PlantEditResolverService implements Resolve<boolean> {

  constructor(private store: Store<FactoryFeatureState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const plantId = route.paramMap.get('plantId');

    if (plantId === null || plantId === undefined) {
      return of(false);
    }

    this.store.dispatch(actions.loadPlant({ plantId }));

    return this.store.select(selectors.selectPlantEntities)
      .pipe(
        timeout(10000),
        map(entities => !!entities[plantId]),
        filter(plantExists => plantExists === true),
        take(1),
        switchMap(plantExists => {
          return of(true);
        }),
        catchError(error => {
          return this.redirectToDefault()
        })
      );
  }

  private redirectToDefault(): Observable<boolean> {
    this.store.dispatch(routerActions.navigate({ path: ['plants'] }));
    return of(false);
  }
}
