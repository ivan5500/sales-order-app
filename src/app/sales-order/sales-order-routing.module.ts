import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddItemPageComponent } from './pages/add-item-page/add-item-page.component';
import { AddOrderPageComponent } from './pages/add-order-page/add-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPageComponent,
  },
  {
    path: 'list',
    component: ListPageComponent,
  },
  {
    path: 'add',
    component: AddOrderPageComponent,
  },
  {
    path: 'add-item',
    component: AddItemPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOrderRoutingModule {}
