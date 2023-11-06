import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';
import { noWhitespaces } from 'src/app/shared/validators';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'sales-order-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  @Output()
  public addItemEvent: EventEmitter<Item> = new EventEmitter();
  @Output()
  public cancelAddEvent: EventEmitter<boolean> = new EventEmitter();
  public pricePatter = /^\d+(\.\d{2})?$/;
  public quantityPatter = '^[0-9]*$';

  public itemForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      noWhitespaces,
      Validators.maxLength(250),
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern(this.pricePatter),
    ]),
    quantity: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern(this.quantityPatter),
    ]),
  });

  get newItem(): Item {
    const item = this.itemForm.value as Item;
    return item;
  }

  constructor(private _validationService: ValidationService) {}

  public onSubmit(): void {
    if (this.itemForm.invalid) return;
    this.addItemEvent.emit(this.newItem);
    console.log(this.newItem);
  }
  public onCancel(): void {
    this.itemForm.reset();
    this.cancelAddEvent.emit(true);
  }

  public isValidField(field: string) {
    return this._validationService.isValidField(this.itemForm, field);
  }
}
