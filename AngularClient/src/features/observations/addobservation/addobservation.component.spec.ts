import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './../../modules/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../observation.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddobservationComponent } from './addobservation.component';
import { ObsDashboardComponent } from './../dashboard/dashboard.component';
describe('AddobservationComponent', () => {
  let component: AddobservationComponent;
  let fixture: ComponentFixture<AddobservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientModule, BrowserAnimationsModule],
      declarations: [ AddobservationComponent, ObsDashboardComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
