import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css'],
})
export class AddItemPageComponent {
  @Output()
  public addItemEvent: EventEmitter<Item> = new EventEmitter();
  constructor(private _router: Router) {}

  public onAddItem(item: Item): void {
    console.log(item);
    this.addItemEvent.emit(item);
  }
  public onCancelAdd(cancel: boolean): void {
    console.log(cancel);
    this._router.navigate(['..']);
  }
}
