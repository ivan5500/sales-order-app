import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalesOrderService } from '../../services/sales-order.service';
import { SalesOrder } from '../../models/sales-order.model';
import { FilterSalesOrder } from '../../models/filter-sales-order.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sales-order-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit, OnDestroy {
  public orders: SalesOrder[] = [];
  private _unsuscribe$: Subject<boolean> = new Subject();
  constructor(private _salesOrderService: SalesOrderService) {}

  ngOnInit(): void {
    this._salesOrderService
      .getOrders()
      .pipe(takeUntil(this._unsuscribe$))
      .subscribe((orders) => {
        this.orders = orders;
      });
  }
  ngOnDestroy(): void {
    this._unsuscribe$.next(true);
    this._unsuscribe$.unsubscribe();
  }

  public addFilter(filter: FilterSalesOrder): void {
    this.orders = this._salesOrderService.filterOrders(filter);
  }
  public removeFilter(_: boolean): void {
    const suscript = this._salesOrderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
    suscript.unsubscribe();
  }
}
