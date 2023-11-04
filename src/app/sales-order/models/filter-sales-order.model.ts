export interface FilterSalesOrder {
  rangeCreationDate: { start: Date | string; end: Date | string };
  rangeCancellDate: { start: Date | string; end: Date | string };
}
