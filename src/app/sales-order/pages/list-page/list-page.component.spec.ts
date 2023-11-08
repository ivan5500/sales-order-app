import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component';
import { ListTableComponent } from '../../components/list-table/list-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [ListPageComponent, FilterFormComponent, ListTableComponent]
    });
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
