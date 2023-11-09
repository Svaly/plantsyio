import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDetailsModalComponent } from './area-details-modal.component';

describe('AreaDetailsModalComponent', () => {
  let component: AreaDetailsModalComponent;
  let fixture: ComponentFixture<AreaDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
