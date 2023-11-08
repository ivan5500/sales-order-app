import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


const routes: Routes = [
  {
    path: '',
    component: ManagementPageComponent,
    children: [
      {
        path: 'add',
        loadChildren: () =>
          import('./pages/add-order-page/add-order-page.module').then(
            (m) => m.AddOrderPageModule
          ),
      },
      { path: 'list', component: ListPageComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOrderRoutingModule {}
