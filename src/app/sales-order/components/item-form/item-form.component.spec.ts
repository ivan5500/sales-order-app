import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormComponent } from './item-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [ItemFormComponent]
    });
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
