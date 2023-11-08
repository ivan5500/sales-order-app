import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableComponent } from './item-table.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('ItemTableComponent', () => {
  let component: ItemTableComponent;
  let fixture: ComponentFixture<ItemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ItemTableComponent]
    });
    fixture = TestBed.createComponent(ItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
