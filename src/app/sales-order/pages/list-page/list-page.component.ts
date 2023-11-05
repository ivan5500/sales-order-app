import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../../services/sales-order.service';
import { SalesOrder } from '../../models/sales-order.model';
import { FilterSalesOrder } from '../../models/filter-sales-order.model';

@Component({
  selector: 'sales-order-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  public orders: SalesOrder[] = [];
  constructor(private _salesOrderService: SalesOrderService) {}

  ngOnInit(): void {
    this.orders = this._salesOrderService.getOrders();
  }

  public addFilter(filter: FilterSalesOrder): void {
    this.orders = this._salesOrderService.filterOrders(filter);
  }
}
