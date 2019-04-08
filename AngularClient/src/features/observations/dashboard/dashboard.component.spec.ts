import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ObsDashboardComponent } from './dashboard.component';
import { ViewobservationComponent} from './../viewobservation/viewobservation.component';
import { ViewCardObservationComponent} from './../view-card-observation/view-card-observation.component';
import { AddobservationComponent } from './../addobservation/addobservation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../modules/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../observation.routing';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: ObsDashboardComponent;
  let fixture: ComponentFixture<ObsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [ ObsDashboardComponent, ViewobservationComponent, ViewCardObservationComponent, AddobservationComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
