import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryStatisticsComponent } from './factory-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryStatisticsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryStatisticsRoutingModule { }
