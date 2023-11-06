import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalesOrder } from '../../models/sales-order.model';
import { Item } from '../../models/item.model';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { SalesOrderService } from '../../services/sales-order.service';

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
    subtotal: new FormControl<number | null>(null),
    vat: new FormControl<number | null>(null),
    total: new FormControl<number | null>(null),

    items: new FormControl<Item[]>([]),
  });

  get newOrder(): SalesOrder {
    const order = this.orderForm.value as SalesOrder;
    return order;
  }

  constructor(
    private _router: Router,
    private _salesOrderService: SalesOrderService
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
}
