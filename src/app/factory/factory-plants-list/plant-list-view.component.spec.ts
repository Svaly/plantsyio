import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListViewComponent } from './plant-list-view.component';

describe('PlantListViewComponent', () => {
  let component: PlantListViewComponent;
  let fixture: ComponentFixture<PlantListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
