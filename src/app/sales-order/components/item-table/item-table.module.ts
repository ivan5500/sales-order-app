import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './item-table.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ItemTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ItemTableComponent],
})
export class ItemTableModule {}
