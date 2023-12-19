import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common'


export class BaseFormGroup extends FormGroup {

  public formatDate(date: Date) {
    return formatDate(date, 'yyyy-MM-dd', 'en')
  }

  public getControl(controlName: string): FormControl {
    const control = this.get(controlName);
    if (!control) {
      throw new Error(`Control with name ${controlName} not found`);
    }

    if (control instanceof FormControl) {
      return control;
    } else {
      throw new Error(`Control with name ${controlName} is not an instance of FormControl`);
    }
  }

  public hasAnyError(formControl: AbstractControl | null): boolean {
    return !!formControl?.errors;
  }

  public hasRequiredError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['required'];
  }

  public hasMinError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['min'];
  }

  public hasMaxError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['max'];
  }

  public hasMinLengthError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['minlength'];
  }

  public hasMaxLengthError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['maxlength'];
  }

  public hasPatternError(formControl: AbstractControl | null): boolean {
    return formControl?.errors && formControl.errors['pattern'];
  }
}
