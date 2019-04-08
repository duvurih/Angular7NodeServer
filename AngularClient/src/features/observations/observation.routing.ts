import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObsDashboardComponent} from './dashboard/dashboard.component';
import { AddobservationComponent } from './addobservation/addobservation.component';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ObsDashboardComponent },
  { path: 'addobservation/:id', component: AddobservationComponent }
];

export const ObservationRouting: ModuleWithProviders = RouterModule.forChild(routes);
