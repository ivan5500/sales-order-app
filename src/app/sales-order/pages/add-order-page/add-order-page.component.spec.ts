import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderPageComponent } from './add-order-page.component';

describe('AddOrderPageComponent', () => {
  let component: AddOrderPageComponent;
  let fixture: ComponentFixture<AddOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrderPageComponent]
    });
    fixture = TestBed.createComponent(AddOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
