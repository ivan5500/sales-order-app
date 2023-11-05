import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterSalesOrder } from '../../models/filter-sales-order.model';

@Component({
  selector: 'sales-order-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent {
  @Output()
  public addFilterEvent: EventEmitter<FilterSalesOrder> = new EventEmitter();
  @Output()
  public resetFilterEvent: EventEmitter<boolean> = new EventEmitter();

  public filterForm = new FormGroup({
    rangeCreationDate: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    rangeCancellDate: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
  });

  public onSubmit(): void {
    if (this.filterForm.invalid) return;

    const filter = this.filterForm.value as FilterSalesOrder;

    console.log(filter);
    this.addFilterEvent.emit(filter);
  }
  public onReset(): void {
    this.filterForm.reset();
    this.resetFilterEvent.emit(true);
  }
}
