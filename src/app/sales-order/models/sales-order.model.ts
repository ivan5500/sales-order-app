import { Item } from './item.model';

export interface SalesOrder {
  id?: string;
  customer: string;
  creationDate: Date;
  cancellationDate?: Date;
  subtotal: number;
  vat: number;
  total: number;
  items?: Item[];
  isCancel?: boolean;
}
