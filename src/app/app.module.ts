import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesOrderModule } from './sales-order/sales-order-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalesOrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
