import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderPageComponent } from './add-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddOrderPageComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOrderPageRoutingModule {}
