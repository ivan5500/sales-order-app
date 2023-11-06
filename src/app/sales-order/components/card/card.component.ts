import { Component, Input, OnInit } from '@angular/core';
import { SalesOrder } from '../../models/sales-order.model';

@Component({
  selector: 'sales-order-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public order!: SalesOrder;
  public formatDate: string = 'dd/MM/yyyy';

  constructor() {}
  ngOnInit(): void {
    if (!this.order) throw new Error('Order must be mandatory');
  }
}
