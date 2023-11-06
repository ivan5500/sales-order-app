import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesOrder } from '../../models/sales-order.model';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';
import { SalesOrderService } from '../../services/sales-order.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { noWhitespaces } from 'src/app/shared/validators';
import { ItemService } from '../../services/item.service';
import { VAT } from 'src/app/shared/util/constants';

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
  public total = 0;
  public subtotal = 0;

  public orderForm = new FormGroup({
    id: new FormControl<string>({ value: '', disabled: true }),
    customer: new FormControl<string>('', [
      Validators.required,
      noWhitespaces,
      Validators.maxLength(250)
    ]),
    creationDate: new FormControl<Date>(
      {
        value: new Date(),
        disabled: true,
      },
      [Validators.required]
    ),
    subtotal: new FormControl<number>({ value: 0, disabled: true }, [
      Validators.required
    ]),
    vat: new FormControl<number>({ value: VAT, disabled: true }, [
      Validators.required
    ]),
    total: new FormControl<number>({ value: 0, disabled: true }, [
      Validators.required
    ]),

    items: new FormControl<Item[]>(this.items, [Validators.required]),
  });

  get newOrder(): SalesOrder {
    const order = this.orderForm.value as SalesOrder;
    order.creationDate = new Date();
    order.subtotal = this.orderForm.controls.subtotal.value!;
    order.vat = VAT;
    order.total = this.orderForm.controls.total.value!;
    return order;
  }

  constructor(
    private _router: Router,
    private _salesOrderService: SalesOrderService,
    public dialog: MatDialog,
    private _itemService: ItemService
  ) {}

  public onSubmit(): void {
    if (this.orderForm.invalid) return;
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
  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddComponent, { data: {} });

    dialogRef.afterClosed().subscribe((item) => {
      if (!item) return;
      this._addItem(item);
    });
  }
  public _addItem(item: Item): void {
    this.items = [item, ...this.items];
    this.orderForm.controls.items.setValue(this.items);
    const total = this._itemService.getTotal(this.items, VAT);
    const subtotal = this._itemService.getSubtotal(this.items);
    this.orderForm.controls.total.setValue(total);
    this.orderForm.controls.subtotal.setValue(subtotal);
  }
}
