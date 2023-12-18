import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenBedModalComponent } from './garden-bed-modal.component';

describe('AreaDetailsModalComponent', () => {
  let component: GardenBedModalComponent;
  let fixture: ComponentFixture<GardenBedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenBedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenBedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
