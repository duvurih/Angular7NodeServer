import { BrowserModule, DomSanitizer, ɵDomSanitizerImpl  } from '@angular/platform-browser';
import { NgModule, Sanitizer, ErrorHandler  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';

import { SharedModule } from './../features/modules/shared/shared.module';
import { MaterialModule } from './../features/modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { ViewMovieComponent } from './movies/view-movie/view-movie.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { FlickrComponent } from './flickr/flickr.component';

// declarations
export const BROWSER_SANITIZATION_PROVIDERS: Array<any> = [
  {provide: Sanitizer, useExisting: DomSanitizer},
  {provide: DomSanitizer, useClass: ɵDomSanitizerImpl},
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DashboardComponent,
    MyNavComponent,
    MyMoviesComponent,
    ViewMovieComponent,
    MovieItemComponent,
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    ScrollDispatchModule,
    SharedModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    BROWSER_SANITIZATION_PROVIDERS,
    { provide: MAT_DATE_LOCALE, useValue: 'en-AU' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
