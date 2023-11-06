import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor() {}

  public getSubtotal(items: Item[]): number {
    let subtotal = items.reduce(
      (acumulador, actual) => acumulador + actual.price * actual.quantity,
      0
    );
    return subtotal;
  }
  public getTotal(items: Item[], vat: number): number {
    let total = this.getSubtotal(items) * vat + this.getSubtotal(items);
    return total;
  }
}
