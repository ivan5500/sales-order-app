import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCardComponent } from './dialog-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { ItemTableModule } from '../item-table/item-table.module';

describe('DialogCardComponent', () => {
  let component: DialogCardComponent;
  let fixture: ComponentFixture<DialogCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ItemTableModule],
      declarations: [DialogCardComponent, CardComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: undefined },
      ],
    });
    fixture = TestBed.createComponent(DialogCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.data = {
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
    expect(component).toBeTruthy();
  });
});
