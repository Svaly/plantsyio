import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryStatisticsRoutingModule } from './factory-statistics-routing.module';
import { FactoryStatisticsComponent } from './factory-statistics.component';

@NgModule({
  declarations: [
    FactoryStatisticsComponent
  ],
  imports: [
    CommonModule,
    FactoryStatisticsRoutingModule
  ]
})
export class FactoryStatisticsModule { }
