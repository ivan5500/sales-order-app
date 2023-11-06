import { Component, Input, OnInit } from '@angular/core';
import { SalesOrder } from '../../models/sales-order.model';

@Component({
  selector: 'sales-order-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css'],
})
export class ListTableComponent implements OnInit {
  @Input()
  public orders: SalesOrder[] = [];
  public formatDate: string = 'dd/MM/yyyy';
  public displayedColumns: string[] = [
    'id',
    'customer',
    'creationDate',
    'cancellationDate',
    'subtotal',
    'vat',
    'total',
  ];
  ngOnInit(): void {
    console.log(this.orders);
  }
}
