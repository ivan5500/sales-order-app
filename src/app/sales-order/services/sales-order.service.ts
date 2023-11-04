import { Injectable } from '@angular/core';
import { SalesOrder } from '../models/sales-order.model';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderService {
  public orders: SalesOrder[] = [];

  constructor() {
    this._loadLocalStorage();
  }

  public getOrders(): SalesOrder[] {
    console.log(this.orders);
    return this.orders;
  }

  public addOrder(order: SalesOrder): SalesOrder {
    const newOrder: SalesOrder = { id: this._generateId(), ...order };
    this.orders.push(newOrder);
    this._saveLocalStorage();
    return newOrder;
  }

  private _generateId(): string {
    return 'ID_SO' + Math.floor(Math.random() * 100);
  }

  private _loadLocalStorage(): void {
    if (!localStorage.getItem('orders')) return;
    this.orders = JSON.parse(localStorage.getItem('orders')!);
  }

  private _saveLocalStorage(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
}
