import { Injectable } from '@angular/core';
import { SalesOrder } from '../models/sales-order.model';
import { FilterSalesOrder } from '../models/filter-sales-order.model';
import { SalesOrderInterface } from './sales-order.interface';
import { Observable, ReplaySubject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderService implements SalesOrderInterface {
  public orders: SalesOrder[] = [];
  public orders$: ReplaySubject<SalesOrder[]> = new ReplaySubject(1);

  constructor() {}

  public getOrders(): Observable<SalesOrder[]> {
    this.orders$.next(this._loadLocalStorage());
    return this.orders$.pipe(map((orders) => (this.orders = orders)));
  }

  public addOrder(order: SalesOrder): Observable<SalesOrder> {
    const newOrder: SalesOrder = { id: this._generateId(), ...order };
    this.orders.push(newOrder);
    this._saveLocalStorage();
    return of(newOrder);
  }
  public cancelOrder(orderC: SalesOrder): Observable<SalesOrder> {
    orderC.isCancel = true;
    orderC.cancellationDate = new Date();
    this.orders = this.orders.map((order) => {
      if (order.id === orderC.id) {
        return { ...orderC };
      }
      return order;
    });
    this._saveLocalStorage();
    return of(orderC);
  }

  public filterOrders(filter: FilterSalesOrder): SalesOrder[] {
    if (filter.rangeCreationDate.start && !filter.rangeCancellDate.start) {
      return this.orders.filter((order) => {
        if (!this._filterByCreationDate(filter, order)) {
          return false;
        }
        return true;
      });
    }
    if (!filter.rangeCreationDate.start && filter.rangeCancellDate.start) {
      return this.orders.filter((order) => {
        if (!this._filterByCancellDate(filter, order)) {
          return false;
        }
        return true;
      });
    } else {
      return this.orders
        .filter((order) => {
          if (!this._filterByCreationDate(filter, order)) {
            return false;
          }
          return true;
        })
        .filter((order) => {
          if (!this._filterByCancellDate(filter, order)) {
            return false;
          }
          return true;
        });
    }
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

  private _loadLocalStorage(): SalesOrder[] {
    if (!localStorage.getItem('orders')) return [];
    const orders = JSON.parse(localStorage.getItem('orders')!);
    return orders;
  }

  private _saveLocalStorage(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
}
