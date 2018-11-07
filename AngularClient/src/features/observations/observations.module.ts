import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../modules/shared/shared.module';
import { MaterialModule } from './../modules/material/material.module';
import { ObservationRouting } from './observation.routing';

import { ViewobservationComponent } from './viewobservation/viewobservation.component';
import { AddobservationComponent } from './addobservation/addobservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCardObservationComponent } from './view-card-observation/view-card-observation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ObservationRouting
  ],
  declarations: [
    ViewobservationComponent,
    AddobservationComponent, DashboardComponent, ViewCardObservationComponent
  ],
  entryComponents: [AddobservationComponent]
})
export class ObservationsModule { }
