import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderPageComponent } from './add-order-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { OrderFormComponent } from '../../components/order-form/order-form.component';
import { AddOrderPageRoutingModule } from './add-order-page.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from '../../components/item-form/item-form.component';
import { DialogAddComponent } from '../../components/dialog-add/dialog-add.component';
import { AddItemPageComponent } from '../add-item-page/add-item-page.component';
import { ItemTableModule } from '../../components/item-table/item-table.module';



@NgModule({
  declarations: [
    AddOrderPageComponent,
    AddItemPageComponent,
    OrderFormComponent,
    ItemFormComponent,
    DialogAddComponent

  ],
  imports: [
    CommonModule,
    AddOrderPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ItemTableModule,
  ],
  exports: [
    AddOrderPageComponent
  ]
})
export class AddOrderPageModule { }
