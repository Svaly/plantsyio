import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { MapViewComponent } from './factory/factory-map/map-view.component';
import { PlantListViewComponent } from './factory/factory-plants-list/plant-list-view.component';
import { PlantsResolverService } from './factory/factory-plants-list/service-plant-list-router-resolver/plants-list-router-resolver.service';


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
    resolve: {
      plantsLoaded: PlantsResolverService
    }
  },
  {
    path: 'factory-statistics',
    loadChildren: () => import('./factory-statistics-module/factory-statistics.module').then(m => m.FactoryStatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  constructor(
    private router: Router) {

    this.router.resetConfig(routes);
  }
}
