import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { PlantListViewComponent } from './plant-list-view/plant-list-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: MapViewComponent,
  },
  {
    path: 'plants',
    component: PlantListViewComponent,
  },
  {
    path: 'factory-statistics',
    loadChildren: () => import('./factory-statistics-module/factory-statistics.module').then(m => m.FactoryStatisticsModule)
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
    constructor(
        private router: Router) {

        this.router.resetConfig(routes);
    }
}
