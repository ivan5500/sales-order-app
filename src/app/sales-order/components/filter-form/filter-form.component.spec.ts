import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormComponent } from './filter-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [FilterFormComponent]
    });
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
