import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../.shared/shared.module';

/**Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { factoryFeatureReducers } from './.store/factory-feature.reducers';
import { FactoryFeatureEffects } from './.store/factory-feature.effects';

/**Components */
import { MapViewComponent } from './factory-map/map-view.component';
import { PlantListViewComponent } from './factory-plants-list/plant-list-view.component';
import { GardenBedModalComponent } from './factory-map/modal-garden-bed/garden-bed-modal.component';
import { PlantListService } from './factory-plants-list/_services/plants-list-service/plants-list.service';
import { EditPlantComponent } from './factory-plants-list/edit-plant/edit-plant.component';

@NgModule({
  declarations: [
    MapViewComponent,
    PlantListViewComponent,
    GardenBedModalComponent,
    EditPlantComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('factoryFeature', factoryFeatureReducers),
    EffectsModule.forFeature([FactoryFeatureEffects]),
  ],
  exports: [
    MapViewComponent,
    PlantListViewComponent,
    GardenBedModalComponent
  ],providers: [
    PlantListService
  ]
})
export class FactoryModule { }
