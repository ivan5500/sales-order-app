import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalesOrder } from '../../models/sales-order.model';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';
import { SalesOrderService } from '../../services/sales-order.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';

@Component({
  selector: 'sales-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  @Output()
  public addOrderEvent: EventEmitter<SalesOrder> = new EventEmitter();
  @Output()
  public cancelAddEvent: EventEmitter<boolean> = new EventEmitter();

  public items: Item[] = [];

  public orderForm = new FormGroup({
    id: new FormControl<string>({ value: '', disabled: true }),
    customer: new FormControl<string>(''),
    creationDate: new FormControl<Date>({
      value: new Date(),
      disabled: false,
    }),
    subtotal: new FormControl<number | null>({ value: 0, disabled: true }),
    vat: new FormControl<number | null>({ value: 0, disabled: true }),
    total: new FormControl<number | null>({ value: 0, disabled: true }),

    items: new FormControl<Item[]>([]),
  });

  get newOrder(): SalesOrder {
    const order = this.orderForm.value as SalesOrder;
    return order;
  }

  constructor(
    private _router: Router,
    private _salesOrderService: SalesOrderService,
    public dialog: MatDialog
  ) {}

  public onSubmit(): void {
    if (this.orderForm.invalid) return;

    this.addOrderEvent.emit(this.newOrder);
    this._salesOrderService.addOrder(this.newOrder);

    this.orderForm.reset();
  }
  public onCancel(): void {
    this.orderForm.reset();
    this.cancelAddEvent.emit(true);
    this._router.navigate(['..']);
  }
  public addItem(item: Item): void {
    this.newOrder.items = [item, ...this.newOrder.items!];
  }
  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddComponent, { data: {} });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.addItem(result);
    });
  }
}
