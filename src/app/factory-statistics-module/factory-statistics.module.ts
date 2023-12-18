/**Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryStatisticsRoutingModule } from './factory-statistics-routing.module';

/**Store */
import { StoreModule } from '@ngrx/store';
import { factoryStatisticsFeatureReducers } from './.store/factory-statistics.reducers';

/**Components */
import { FactoryStatisticsComponent } from './factory-statistics.component';
import { SharedModule } from '../.shared/shared.module';

@NgModule({
  declarations: [
    FactoryStatisticsComponent
  ],
  imports: [
    CommonModule,
    FactoryStatisticsRoutingModule,
    SharedModule,
    StoreModule.forFeature('factoryStatisticsFeature', factoryStatisticsFeatureReducers),
  ]
})
export class FactoryStatisticsModule { }
