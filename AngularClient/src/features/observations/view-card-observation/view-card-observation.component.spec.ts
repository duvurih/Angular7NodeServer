import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './../../modules/material/material.module';
import { ViewCardObservationComponent } from './view-card-observation.component';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../observation.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AddobservationComponent } from './../addobservation/addobservation.component';
import { ObsDashboardComponent } from './../dashboard/dashboard.component';

describe('ViewCardObservationComponent', () => {
  let component: ViewCardObservationComponent;
  let fixture: ComponentFixture<ViewCardObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [ ViewCardObservationComponent, ObsDashboardComponent, AddobservationComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
