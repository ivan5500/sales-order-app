import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor() {}

  public getSubtotal(items: Item[]): number {
    const subtotal = items.reduce(
      (acumulador, item) => acumulador + item.price,
      0
    );
    console.log(subtotal);

    return subtotal;
  }
}
