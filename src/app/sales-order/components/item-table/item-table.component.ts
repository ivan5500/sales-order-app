import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'sales-order-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
})
export class ItemTableComponent implements OnInit {
  @Input()
  public items: Item[] = [];
  displayedColumns = ['name', 'price', 'quantity'];

  constructor() {}
  ngOnInit(): void {
    console.log(this.items);
  }
}
