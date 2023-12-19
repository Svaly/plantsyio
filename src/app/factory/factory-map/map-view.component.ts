import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FactoryPlan } from './_services/factory-plan-service/factory-plan';
import { PlantBed } from './_services/factory-plan-service/garden-bed';
import { GardenBedModalComponent } from './modal-garden-bed/garden-bed-modal.component';
import { WaterManagementService } from './_services/water-management-service/water-management-service';
import { Observable, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../.store/app.state';
import * as selectors from '../.store/factory-feature.selectors';
import * as actions from '../.store/factory-feature.actions';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  factoryPlan$: Observable<FactoryPlan> | undefined;
  name$: any | undefined;
  loading = true;
  rainWaterLevel$: Observable<number> | undefined;

  constructor(
    private modalService: NgbModal,
    private store: Store<AppState>,
    private waterManagementService: WaterManagementService) { }

  ngOnInit(): void {
    this.factoryPlan$ = this.store.pipe(
    select(selectors.selectFactoryPlan),
    tap(c => console.log(c)));

    this.name$ = this.store.pipe(
      select(selectors.selectFactoryName),
      tap(c => console.log(c)));

    this.rainWaterLevel$ = this.waterManagementService.rainWaterLevel$;
  }

  onCreateArea(): void {
    this.store.dispatch(
      actions.createPlantBed({
        newArea: { id:1, name: 'Plant Area TEST', classes: 'col-md-5 plant-area', soilMoisture: 55 },
        isLoading: true
    }));
  }

  openAreaDetails(area: PlantBed) {
    const modalRef = this.modalService.open(GardenBedModalComponent);
    modalRef.componentInstance.area = { ...area };

    modalRef.result.then(
      (updatedArea) => {
        this.store.dispatch(actions.updatePlantBed({ updatedArea, isLoading: true }));
      },
    );
  }
}
