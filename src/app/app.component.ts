import { Component } from '@angular/core';
import * as routerActions from './.store/router/router.actions';
import { AppState } from './.store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) { }


  selectTab(tab: 'map' | 'plants' | 'factory-statistics') {
    this.store.dispatch(routerActions.navigate({ path: ['/', tab] }));
  }
}
