import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { ManagementPageComponent } from './pages/management-page/management-page.component';


@NgModule({
  declarations: [
    ManagementPageComponent
  ],
  imports: [
    CommonModule,
    SalesOrderRoutingModule
  ]
})
export class SalesOrderModule { }
