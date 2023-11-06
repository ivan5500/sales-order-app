import { AbstractControl } from '@angular/forms';

export function noWhitespaces(control: AbstractControl) {
  if (control.value && control.value.trim() === '') {
    return { noEspacios: true };
  }
  return null;
}
