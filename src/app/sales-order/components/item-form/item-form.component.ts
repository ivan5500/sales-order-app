import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../../models/item.model';

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

  public itemForm = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number | null>(null),
    quantity: new FormControl<number | null>(null),
  });

  get newItem(): Item {
    const item = this.itemForm.value as Item;
    return item;
  }

  public onSubmit(): void {
    if (this.itemForm.invalid) return;
    this.addItemEvent.emit(this.newItem);
    console.log(this.newItem);
  }
  public onCancel(): void {
    this.itemForm.reset();
    this.cancelAddEvent.emit(true);
  }
}
