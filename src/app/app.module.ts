import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { PlantListViewComponent } from './plant-list-view/plant-list-view.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaDetailsModalComponent } from './map-view/area-details-modal/area-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    PlantListViewComponent,
    AreaDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
