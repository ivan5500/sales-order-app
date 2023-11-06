import { Component } from '@angular/core';

@Component({
  selector: 'sales-order-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css'],
})
export class ManagementPageComponent {
  public sidebarItems = [
    { label: 'Sales Order List', icon: 'label', url: './list' },
    { label: 'Create Sales Order', icon: 'add', url: './add' }
  ];
}
