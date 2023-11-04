import { Injectable } from '@angular/core';
import { SalesOrder } from '../models/sales-order.model';
import { ordersData } from './sales-order.data';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderService {
  public orders!: SalesOrder[];

  constructor() {}

  public getOrders(): SalesOrder[] {
    this.orders = ordersData;
    console.log(this.orders);
    return ordersData;
  }
}
