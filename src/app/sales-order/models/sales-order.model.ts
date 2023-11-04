export interface SalesOrder {
  id: string;
  creationDate: Date;
  cancellationDate: Date;
  subtotal: number;
  vat: number;
  total: number;
}
