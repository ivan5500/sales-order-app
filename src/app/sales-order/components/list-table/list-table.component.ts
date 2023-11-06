import { Component, Input, OnInit } from '@angular/core';
import { SalesOrder } from '../../models/sales-order.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

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
    'actions',
  ];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    console.log(this.orders);
  }

  cancelOrder(cancellOrder: boolean): void {
    console.log(cancellOrder);
  }
  showDetails(order: SalesOrder): void {
    const dialogRef = this.dialog.open(DialogCardComponent, {
      data: order,
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
