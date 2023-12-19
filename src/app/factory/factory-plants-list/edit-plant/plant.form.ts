import { FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Plant } from '../../.store/factory-feature.state.models';
import { BaseFormGroup } from '../../../.core/base-form-group';

export class PlantForm extends BaseFormGroup {

  constructor(formBuilder: FormBuilder) {
    super({
      id: formBuilder.control({ value: '', disabled: true }, Validators.required),
      name: formBuilder.control('', Validators.required),
      picture: formBuilder.control(''),
      plantBedId: formBuilder.control(null, [Validators.required]),
      amount: formBuilder.control(null, [Validators.required, Validators.min(1)]),
      condition: formBuilder.control('', Validators.required),
      developmentPhase: formBuilder.control('', Validators.required),
      plantingDate: formBuilder.control(null, Validators.required),
      harvestDate: formBuilder.control(null, Validators.required)
    });
  }

  public get idFormControl(): FormControl {
    return this.getControl('id');
  }

  public get nameFormControl(): FormControl {
    return this.getControl('name');
  }

  public get pictureFormControl(): FormControl {
    return this.getControl('picture');
  }

  public get plantBedIdFormControl(): FormControl {
    return this.getControl('plantBedId');
  }

  public get amountFormControl(): FormControl {
    return this.getControl('amount');
  }

  public get conditionFormControl(): FormControl {
    return this.getControl('condition');
  }

  public get developmentPhaseFormControl(): FormControl {
    return this.getControl('developmentPhase');
  }

  public get plantingDateFormControl(): FormControl {
    return this.getControl('plantingDate');
  }

  public get harvestDateFormControl(): FormControl {
    return this.getControl('harvestDate');
  }

  setFormState(plant: Plant): void {
    this.patchValue({
      id: plant.id,
      name: plant.name,
      picture: plant.picture,
      plantBedId: plant.plantBedId,
      amount: plant.amount,
      condition: plant.condition,
      developmentPhase: plant.developmentPhase,
      plantingDate: this.formatDate(plant.plantingDate),
      harvestDate: this.formatDate(plant.harvestDate)
    }, { emitEvent: false });

    this.updateValueAndValidity({ emitEvent: false });
  }

  getFormState(): Plant {
    return {
      id: this.idFormControl.value,
      name: this.nameFormControl.value,
      picture: this.pictureFormControl.value,
      plantBedId: this.plantBedIdFormControl.value,
      amount: this.amountFormControl.value,
      condition: this.conditionFormControl.value,
      developmentPhase: this.developmentPhaseFormControl.value,
      plantingDate: this.plantingDateFormControl.value,
      harvestDate: this.harvestDateFormControl.value
    };
  }
}
