import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderPageComponent } from './add-order-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemTableModule } from '../../components/item-table/item-table.module';
import { AddOrderPageRoutingModule } from './add-order-page-routing.module';
import { OrderFormComponent } from '../../components/order-form/order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddOrderPageComponent', () => {
  let component: AddOrderPageComponent;
  let fixture: ComponentFixture<AddOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AddOrderPageRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        ItemTableModule,
        BrowserAnimationsModule
      ],
      declarations: [AddOrderPageComponent, OrderFormComponent],
    });
    fixture = TestBed.createComponent(AddOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
