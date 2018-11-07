import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { ViewMovieComponent } from './movies/view-movie/view-movie.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { FlickrComponent } from './flickr/flickr.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MyMoviesComponent},
  { path : 'viewmovie/:name', component : ViewMovieComponent},
  { path: 'flickr', component: FlickrComponent},
  { path: 'observation', loadChildren: './../features/observations/observations.module#ObservationsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
