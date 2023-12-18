import { Component, OnInit } from '@angular/core';
import { Plant } from './service-plants-list/plant.model';
import { FactoryFeatureState } from '../.store/factory-feature.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../.store/factory-feature.actions';
import * as selectors from '../.store/factory-feature.selectors';

@Component({
  selector: 'app-plant-list-view',
  templateUrl: './plant-list-view.component.html',
  styleUrls: ['./plant-list-view.component.css']
})
export class PlantListViewComponent implements OnInit {

  plants$: Observable<Plant[]>;

  constructor(private store: Store<FactoryFeatureState>) {
    // Select plants from the store
    this.plants$ = this.store.select(selectors.selectAllPlants);
  }

  ngOnInit(): void {
  }

}
