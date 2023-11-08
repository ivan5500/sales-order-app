import { Observable } from 'rxjs';
import { SalesOrder } from '../models/sales-order.model';
import { FilterSalesOrder } from '../models/filter-sales-order.model';

export interface SalesOrderInterface {
  getOrders(): Observable<SalesOrder[]>;
  cancelOrder(order: SalesOrder): Observable<SalesOrder>;
  addOrder(order: SalesOrder): Observable<SalesOrder>;
  filterOrders(filter: FilterSalesOrder): SalesOrder[];
}
