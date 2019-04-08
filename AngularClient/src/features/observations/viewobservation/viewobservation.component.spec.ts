import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../modules/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ViewobservationComponent } from './viewobservation.component';
import { ObsDashboardComponent } from './../dashboard/dashboard.component';

describe('ViewobservationComponent', () => {
  let component: ViewobservationComponent;
  let fixture: ComponentFixture<ViewobservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormsModule, MaterialModule.forRoot(), HttpClientModule],
      declarations: [ ViewobservationComponent, ObsDashboardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
