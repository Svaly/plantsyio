import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { MapViewComponent } from './factory/factory-map/map-view.component';
import { PlantListViewComponent } from './factory/factory-plants-list/plant-list-view.component';
import { EditPlantComponent } from './factory/factory-plants-list/edit-plant/edit-plant.component';
import { PlantsResolverService } from './factory/factory-plants-list/_services/plant-list-router-resolver-service/plants-list-router-resolver.service';
import { PlantCreateGuardService } from './factory/factory-plants-list/_services/plant-create-guard-service/plants-create-guard.service';
import { PlantEditResolverService } from './factory/factory-plants-list/_services/plant-edit-router-resolver-service/plants-edit-router-resolver.service';

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
    path: 'plants/create/:plantId',
    component: EditPlantComponent,
    canActivate: [PlantCreateGuardService]
  },
  {
    path: 'plants/edit/:plantId',
    component: EditPlantComponent,
    resolve: {
      plantsLoaded: PlantEditResolverService
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
