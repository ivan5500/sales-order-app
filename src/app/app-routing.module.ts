import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () => import('./sales-order/sales-order-management.module').then(m => m.SalesOrderModule)
  },
  {
    path: '**',
    redirectTo: 'orders',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
