import { Component, OnInit } from '@angular/core';
import { PlantForm } from './plant.form';
import { FormBuilder } from '@angular/forms';
import { Observable, filter, map, merge, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { FactoryFeatureState } from '../../.store/factory-feature.state';
import * as selectors from '../../.store/factory-feature.selectors';
import * as actions from '../../.store/factory-feature.actions';
import * as routerActions from '../../../.store/router/router.actions';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {

  public stateChanges$: Observable<any>;
  public form: PlantForm;
  public submitClicked = false;

  constructor(
    private store: Store<FactoryFeatureState>,
    formBuilder: FormBuilder) {
    this.form = new PlantForm(formBuilder);

    const storedPlantValue$ = this.store.select(selectors.selectActivePlant)
      .pipe(
        filter(plantState => {
          return !!plantState?.plant;
        }),
        map(plantState => plantState?.plant!),
        tap(plant => this.form.setFormState(plant))
      );

    const formValueChanges$ = this.form.valueChanges
      .pipe(
        tap(() => this.store.dispatch(actions.updatePlant({ plant: this.form.getFormState() }))),
        filter(() => false)
      );

    this.stateChanges$ = merge(formValueChanges$, storedPlantValue$);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.updateValueAndValidity({ emitEvent: false });

    if (this.form.valid) {
      const plantData = this.form.getFormState();
      this.store.dispatch(actions.storePantInBackend({ plant: plantData }));
      this.store.dispatch(routerActions.navigate({ path: ['plants'] }));
    }

    this.submitClicked = true;
  }
}
