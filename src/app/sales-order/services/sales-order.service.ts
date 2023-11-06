import { Injectable } from '@angular/core';
import { SalesOrder } from '../models/sales-order.model';
import { FilterSalesOrder } from '../models/filter-sales-order.model';

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
    return [...this.orders];
  }

  public addOrder(order: SalesOrder): SalesOrder {
    const newOrder: SalesOrder = { id: this._generateId(), ...order };
    this.orders.push(newOrder);
    this._saveLocalStorage();
    return newOrder;
  }

  public filterOrders(filter: FilterSalesOrder): SalesOrder[] {
    return this.orders.filter((order) => {
      if (!this._filterByCreationDate(filter, order)) {
        return false;
      }
      if (!this._filterByCancellDate(filter, order)) {
        return false;
      }
      return true;
    });
  }

  private _filterByCreationDate(
    filter: FilterSalesOrder,
    order: SalesOrder
  ): boolean {
    if (filter.rangeCreationDate.start) {
      return (
        new Date(order.creationDate) >=
          new Date(filter.rangeCreationDate.start) &&
        new Date(order.creationDate) <= new Date(filter.rangeCreationDate.start)
      );
    }
    return true;
  }
  private _filterByCancellDate(
    filter: FilterSalesOrder,
    order: SalesOrder
  ): boolean {
    if (filter.rangeCancellDate.start) {
      return (
        new Date(order.cancellationDate) >=
          new Date(filter.rangeCancellDate.start) &&
        new Date(order.cancellationDate) <=
          new Date(filter.rangeCancellDate.start)
      );
    }
    return true;
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
