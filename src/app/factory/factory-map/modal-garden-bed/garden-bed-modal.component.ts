// area-details-modal.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PlantBed } from '../_services/factory-plan-service/garden-bed';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WaterManagementService } from '../_services/water-management-service/water-management-service';

@Component({
  selector: 'app-garden-bed-modal',
  templateUrl: './garden-bed-modal.component.html',
})
export class GardenBedModalComponent implements OnInit {
  @Input() area: PlantBed | null = null;
  @Output() updatedArea = new EventEmitter<PlantBed>();

  public areaName = '';
  public soilMoisture? = 0;

  constructor(public activeModal: NgbActiveModal, private waterManagementService: WaterManagementService) {}

  public waterPlants() {
    if(this.area?.id){
      this.waterManagementService.waterThePlants(this.area.id);
    }
  }

  onSave() {
    if (this.area) {
      this.area.name = this.areaName;
      this.area.soilMoisture = this.soilMoisture;
      this.updatedArea.emit(this.area);
      this.activeModal.close(this.area);
    }
  }

  ngOnInit(): void {
    if (this.area?.name) {
      this.areaName = this.area.name;
      this.soilMoisture = this.area.soilMoisture;
    }
  }

  onClose() {
    this.activeModal.dismiss(); // Dismiss the modal without saving changes
  }
}
