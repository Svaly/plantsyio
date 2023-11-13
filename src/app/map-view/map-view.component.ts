import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Area, FactoryPlan, FactoryPlanService, Room } from './factory-plan-service';
import { AreaDetailsModalComponent } from './area-details-modal/area-details-modal.component';
import { WaterManagementService } from './water-management-service';
import { Observable, filter, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as selectors from '../store/app.selectors';
import * as actions from '../store/app.actions';

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
      actions.createArea({
        newArea: { id:1, name: 'Plant Area TEST', classes: 'col-md-5 plant-area', soilMoisture: 55 }
    }));
  }

  openAreaDetails(area: Area) {
    const modalRef = this.modalService.open(AreaDetailsModalComponent);
    modalRef.componentInstance.area = { ...area };

    modalRef.result.then(
      (updatedArea) => {
        this.store.dispatch(actions.updateArea({ updatedArea }));
      },
    );
  }
}
