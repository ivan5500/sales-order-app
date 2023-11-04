import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPageComponent } from './add-item-page.component';

describe('AddItemPageComponent', () => {
  let component: AddItemPageComponent;
  let fixture: ComponentFixture<AddItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemPageComponent]
    });
    fixture = TestBed.createComponent(AddItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
