import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { AddobservationComponent } from './addobservation/addobservation.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addobservation/:id', component: AddobservationComponent }
];

export const ObservationRouting: ModuleWithProviders = RouterModule.forChild(routes);
