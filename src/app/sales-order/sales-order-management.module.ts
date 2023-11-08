import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { MaterialModule } from '../material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CancelBtnComponent } from './components/cancel-btn/cancel-btn.component';
import { CardComponent } from './components/card/card.component';
import { DialogCardComponent } from './components/dialog-card/dialog-card.component';
import { ItemTableModule } from './components/item-table/item-table.module';

@NgModule({
  declarations: [
    ManagementPageComponent,
    ListPageComponent,
    ListTableComponent,
    FilterFormComponent,
    CancelBtnComponent,
    CardComponent,
    DialogCardComponent,
  ],
  imports: [
    SalesOrderRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ItemTableModule
    ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class SalesOrderModule {}
