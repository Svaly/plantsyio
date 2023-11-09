// area-details-modal.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Area } from '../factory-plan-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-area-details-modal',
  templateUrl: './area-details-modal.component.html',
})
export class AreaDetailsModalComponent implements OnInit {
  @Input() area: Area | null = null;
  @Output() updatedArea = new EventEmitter<Area>();

  public areaName = '';

  constructor(public activeModal: NgbActiveModal) {}

  onSave() {
    if (this.area) {
      this.area.name = this.areaName;
      this.updatedArea.emit(this.area);
      this.activeModal.close(this.area);
    }
  }

  ngOnInit(): void {
    if (this.area?.name) {
      this.areaName = this.area.name;
    }
  }

  onClose() {
    this.activeModal.dismiss(); // Dismiss the modal without saving changes
  }
}
