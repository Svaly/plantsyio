// plants-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, catchError, mergeMap, timeout, delay, filter, switchMap } from 'rxjs/operators';
import * as actions from '../../../.store/factory-feature.actions';
import * as selectors from '../../../.store/factory-feature.selectors';
import { FactoryFeatureState } from '../../../.store/factory-feature.state';

@Injectable({ providedIn: 'root' })
export class PlantsResolverService implements Resolve<boolean> {

  constructor(private store: Store<FactoryFeatureState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(actions.loadPlantsList({ isLoading: true }));
    return of(true);
  }
}
