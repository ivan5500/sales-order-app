import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTableComponent } from './list-table.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('ListTableComponent', () => {
  let component: ListTableComponent;
  let fixture: ComponentFixture<ListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ListTableComponent]
    });
    fixture = TestBed.createComponent(ListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
