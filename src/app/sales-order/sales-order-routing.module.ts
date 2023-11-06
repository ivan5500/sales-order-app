import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddOrderPageComponent } from './pages/add-order-page/add-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPageComponent,
    children: [
      { path: 'add', component: AddOrderPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOrderRoutingModule {}
