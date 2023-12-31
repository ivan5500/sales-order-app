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
  public maxDate: Date = new Date();

  public filterForm = new FormGroup({
    rangeCreationDate: new FormGroup({
      start: new FormControl<Date | null>({ value: null, disabled: true }),
      end: new FormControl<Date | null>({ value: null, disabled: true }),
    }),
    rangeCancellDate: new FormGroup({
      start: new FormControl<Date | null>({ value: null, disabled: true }),
      end: new FormControl<Date | null>({ value: null, disabled: true }),
    }),
  });

  public onSubmit(): void {
    if (this._isEmptyForm()) return;

    const filter = this.filterForm.value as FilterSalesOrder;

    console.log(filter);
    this.addFilterEvent.emit(filter);
  }
  public onReset(): void {
    this.filterForm.reset();
    this.resetFilterEvent.emit(true);
  }

  private _isEmptyForm(): boolean {
    if (
      this.filterForm.value.rangeCreationDate?.end ||
      this.filterForm.value.rangeCancellDate?.end
    ) {
      return false;
    }
    return true;
  }
}
