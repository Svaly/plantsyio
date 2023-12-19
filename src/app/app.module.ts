/**Modules */
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FactoryModule } from './factory/factory.module';
import { SharedModule } from './.shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

/**Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { entityConfig } from './.store/entity-metadata';
import { appReducer } from './.store/app.reducers';
import { AppEffects } from './.store/app.effects';
import { RouterEffects } from './.store/router/router.effects';

/**Components */
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FactoryModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: appReducer, router: routerReducer }, {}),
    EffectsModule.forRoot([AppEffects, RouterEffects]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
