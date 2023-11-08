import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPageComponent } from './add-item-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ItemFormComponent } from '../../components/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddItemPageComponent', () => {
  let component: AddItemPageComponent;
  let fixture: ComponentFixture<AddItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [AddItemPageComponent, ItemFormComponent]
    });
    fixture = TestBed.createComponent(AddItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
