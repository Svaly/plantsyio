import { Component, OnInit } from '@angular/core';
import { FactoryFeatureState } from '../.store/factory-feature.state';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import * as routerActions from '../../.store/router/router.actions';
import * as actions from '../.store/factory-feature.actions';
import * as selectors from '../.store/factory-feature.selectors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-plant-list-view',
  templateUrl: './plant-list-view.component.html',
  styleUrls: ['./plant-list-view.component.css']
})
export class PlantListViewComponent implements OnInit {

  state$: Observable<FactoryFeatureState>;
  isLoading: boolean = true;

  constructor(private store: Store<FactoryFeatureState>) {
    // Select plants from the store
    this.state$ = this.store.select(selectors.factoryFeatureState)
      .pipe(
        tap(c => {
          this.isLoading = c.plantsListLoading;
        })
      );
  }

  ngOnInit(): void {
  }

  onAddNewPlant() {
    const plantId = uuidv4();
    this.store.dispatch(actions.startPlantCreation({ plantId }));
    this.store.dispatch(routerActions.navigate({ path: ['plants', 'create', plantId] }));
  }

  onPlantCardClicked(plantId: string) {
    this.store.dispatch(routerActions.navigate({ path: ['plants', 'edit', plantId] }));
  }
}
