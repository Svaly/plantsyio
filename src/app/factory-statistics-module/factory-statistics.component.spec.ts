import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryStatisticsComponent } from './factory-statistics.component';

describe('FactoryStatisticsComponent', () => {
  let component: FactoryStatisticsComponent;
  let fixture: ComponentFixture<FactoryStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
