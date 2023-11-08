import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ItemTableModule } from '../item-table/item-table.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ItemTableModule],
      declarations: [CardComponent],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.order = {
      id: 'ID_SO63',
      customer: 'Modelo',
      items: [
        {
          name: 'negra modelo',
          price: 100,
          quantity: 10,
        },
      ],
      creationDate: new Date('2023-11-06T13:47:05.892Z'),
      subtotal: 1000,
      vat: 0.16,
      total: 1160,
      isCancel: true,
      cancellationDate: new Date('2023-11-06T14:12:58.772Z'),
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
