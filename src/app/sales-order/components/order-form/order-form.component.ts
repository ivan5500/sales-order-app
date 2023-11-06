import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesOrder } from '../../models/sales-order.model';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';
import { SalesOrderService } from '../../services/sales-order.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { noWhitespaces } from 'src/app/shared/validators';

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
    customer: new FormControl<string>('', [Validators.required, noWhitespaces]),
    creationDate: new FormControl<Date>(
      {
        value: new Date(),
        disabled: true,
      },
      [Validators.required]
    ),
    subtotal: new FormControl<number | null>({ value: 0, disabled: true }),
    vat: new FormControl<number | null>({ value: 0, disabled: true }),
    total: new FormControl<number | null>({ value: 0, disabled: true }),

    items: new FormControl<Item[]>(this.items),
  });

  get newOrder(): SalesOrder {
    const order = this.orderForm.value as SalesOrder;
    order.creationDate = new Date();
    return order;
  }

  constructor(
    private _router: Router,
    private _salesOrderService: SalesOrderService,
    public dialog: MatDialog
  ) {}

  public onSubmit(): void {
    if (this.orderForm.invalid) return;
    this.newOrder.items = this.items;

    this.addOrderEvent.emit(this.newOrder);
    this._salesOrderService.addOrder(this.newOrder);

    this.orderForm.reset();
    this.orderForm.controls.creationDate.setValue(new Date());
    this.items = [];
  }
  public onCancel(): void {
    this.orderForm.reset();
    this.cancelAddEvent.emit(true);
    this._router.navigate(['..']);
  }
  public addItem(item: Item): void {
    this.items = [item, ...this.items];
  }
  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddComponent, { data: {} });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.addItem(result);
    });
  }
}
