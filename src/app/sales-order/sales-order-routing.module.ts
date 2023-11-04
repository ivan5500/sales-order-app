import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

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
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOrderRoutingModule {}
