import { FormControl, ValidationErrors } from '@angular/forms';

export const noWhitespaces = (
  control: FormControl
): ValidationErrors | null => {
  return (control.value || '').trim().length ? null : { whitespace: true };
};
