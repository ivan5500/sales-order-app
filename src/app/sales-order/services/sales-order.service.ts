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
  public cancelOrder(orderC: SalesOrder): SalesOrder {
    orderC.isCancel = true;
    orderC.cancellationDate = new Date();
    this.orders = this.orders.map((order) => {
      if (order.id === orderC.id) {
        return { ...orderC };
      }
      return order;
    });
    this._saveLocalStorage();
    return orderC;
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
    if (!order.creationDate) {
      return false;
    }
    if (filter.rangeCreationDate.start) {
      const createDate = new Date(order.creationDate).setHours(0, 0, 0, 0);
      const start = new Date(filter.rangeCreationDate.start).setHours(
        0,
        0,
        0,
        0
      );
      const end = new Date(filter.rangeCreationDate.end).setHours(0, 0, 0, 0);
      return createDate >= start && createDate <= end;
    }
    return true;
  }
  private _filterByCancellDate(
    filter: FilterSalesOrder,
    order: SalesOrder
  ): boolean {
    if (!order.cancellationDate) {
      return false;
    }
    if (filter.rangeCancellDate.start) {
      const cancellDate = new Date(order.cancellationDate!).setHours(
        0,
        0,
        0,
        0
      );
      const start = new Date(filter.rangeCancellDate.start).setHours(
        0,
        0,
        0,
        0
      );
      const end = new Date(filter.rangeCancellDate.end).setHours(0, 0, 0, 0);
      return cancellDate >= start && cancellDate <= end;
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
