import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../modules/shared/shared.module';
import { MaterialModule } from './../modules/material/material.module';
import { ObservationRouting } from './observation.routing';

import { ViewobservationComponent } from './viewobservation/viewobservation.component';
import { AddobservationComponent } from './addobservation/addobservation.component';
import { ObsDashboardComponent } from './dashboard/dashboard.component';
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
    ObsDashboardComponent,
    ViewobservationComponent,
    AddobservationComponent,
    ViewCardObservationComponent
  ],
  entryComponents: [
    AddobservationComponent, 
    ViewobservationComponent, 
    AddobservationComponent,
    ViewCardObservationComponent
  ]
})
export class ObservationsModule { }
