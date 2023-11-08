import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPageComponent } from './management-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ManagementPageComponent', () => {
  let component: ManagementPageComponent;
  let fixture: ComponentFixture<ManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, AppRoutingModule],
      declarations: [ManagementPageComponent],
    });
    fixture = TestBed.createComponent(ManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
