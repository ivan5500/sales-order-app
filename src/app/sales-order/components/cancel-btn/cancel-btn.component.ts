import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalesOrder } from '../../models/sales-order.model';
import { SalesOrderService } from '../../services/sales-order.service';

@Component({
  selector: 'sales-order-cancel-btn',
  templateUrl: './cancel-btn.component.html',
  styleUrls: ['./cancel-btn.component.css'],
})
export class CancelBtnComponent {
  @Input()
  public order!: SalesOrder;
  @Output()
  public cancelEvent: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private _salesOrderService: SalesOrderService) {}

  public cancelOrder(): void {
    try {
      this._salesOrderService.cancelOrder(this.order);
      this.cancelEvent.emit(true);
    } catch (error) {
      this.cancelEvent.emit(false);
    }
  }
}
