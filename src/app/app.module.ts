import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { PlantListViewComponent } from './plant-list-view/plant-list-view.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaDetailsModalComponent } from './map-view/area-details-modal/area-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { appReducer } from './store/app.reducers';
import { AppEffects } from './store/app.effects';

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
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({appStateKey: appReducer}, {}),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
