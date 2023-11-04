import { Item } from './item.model';

export interface SalesOrder {
  id?: string;
  customer: string;
  creationDate: Date | string;
  cancellationDate: Date | string;
  subtotal: number;
  vat: number;
  total: number;
  items?: Item[];
}
