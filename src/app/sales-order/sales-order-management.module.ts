import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


@NgModule({
  declarations: [
    ManagementPageComponent,
    ListPageComponent,
    ListTableComponent,
  ],
  imports: [
    SalesOrderRoutingModule,
    CommonModule,
  ]
})
export class SalesOrderModule { }
