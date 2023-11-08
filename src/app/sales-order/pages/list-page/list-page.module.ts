import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { ListTableComponent } from '../../components/list-table/list-table.component';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component';
import { CancelBtnComponent } from '../../components/cancel-btn/cancel-btn.component';
import { CardComponent } from '../../components/card/card.component';
import { DialogCardComponent } from '../../components/dialog-card/dialog-card.component';
import { ItemTableModule } from '../../components/item-table/item-table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ListPageRoutingModule } from './list-page-routing.module';

@NgModule({
  declarations: [
    ListPageComponent,
    ListTableComponent,
    FilterFormComponent,
    CancelBtnComponent,
    CardComponent,
    DialogCardComponent,
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ItemTableModule,
  ],
})
export class ListPageModule {}
