import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddComponent } from './dialog-add.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddComponent', () => {
  let component: DialogAddComponent;
  let fixture: ComponentFixture<DialogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [DialogAddComponent, ItemFormComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: undefined },
      ],
    });
    fixture = TestBed.createComponent(DialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
