import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Area, FactoryPlanService, Room } from './factory-plan-service';
import { AreaDetailsModalComponent } from './area-details-modal/area-details-modal.component';
import { WaterManagementService } from './water-management-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  rows: Area[][] = [];
  centralRoom: Room | null = null;
  loading = true;
  rainWaterLevel$: Observable<number> | undefined;

  constructor(
    private modalService: NgbModal,
    private factoryPlanService: FactoryPlanService,
    private waterManagementService: WaterManagementService) { }

  ngOnInit(): void {
    this.getFactoryData();
    this.rainWaterLevel$ = this.waterManagementService.rainWaterLevel$;
  }

  openAreaDetails(area: Area) {
    const modalRef = this.modalService.open(AreaDetailsModalComponent);
    modalRef.componentInstance.area = { ...area };

    modalRef.result.then(
      (updatedArea) => {
        this.factoryPlanService.updateArea(updatedArea.id, updatedArea.name)
        this.getFactoryData();
      },
    );
  }

  private getFactoryData() {
    this.factoryPlanService.getFactoryPlanData().subscribe(data => {
      this.rows = data.rows;
      this.centralRoom = data.centralRoom;
      this.loading = false;
    });
  }
}
