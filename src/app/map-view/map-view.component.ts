import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Area, FactoryPlanService, Room } from './factory-plan-service';
import { AreaDetailsModalComponent } from './area-details-modal/area-details-modal.component';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  rows: Area[][] = [];
  centralRoom: Room | null = null;
  loading = true;

  constructor(private modalService: NgbModal, private factoryPlanService: FactoryPlanService) {}

  ngOnInit(): void {
    this.getFactoryData();
  }

  openAreaDetails(area: Area) {
    const modalRef = this.modalService.open(AreaDetailsModalComponent);
    modalRef.componentInstance.area = { ...area }; // Pass a copy of the area to the modal

    modalRef.result.then(
      (updatedArea) => {
        // This is the area returned from the modal. Update the original area with new content.
        this.factoryPlanService.updateArea(updatedArea.id, updatedArea.name)
        this.getFactoryData();
      },
      (reason) => {
        // Handle dismissals or errors if needed
      }
    );
  }

  private getFactoryData(){
    this.factoryPlanService.getFactoryPlanData().subscribe(data => {
      this.rows = data.rows;
      this.centralRoom = data.centralRoom;
      this.loading = false;
    });
  }
}
