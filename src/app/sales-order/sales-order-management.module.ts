import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemPageComponent } from './pages/add-item-page/add-item-page.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { MaterialModule } from '../material/material.module';
import { AddOrderPageComponent } from './pages/add-order-page/add-order-page.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';

@NgModule({
  declarations: [
    ManagementPageComponent,
    ListPageComponent,
    ListTableComponent,
    ItemTableComponent,
    ItemFormComponent,
    AddItemPageComponent,
    OrderFormComponent,
    FilterFormComponent,
    AddOrderPageComponent,
    DialogAddComponent,
  ],
  imports: [
    SalesOrderRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class SalesOrderModule {}
