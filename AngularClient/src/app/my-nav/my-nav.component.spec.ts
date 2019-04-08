import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatIconModule,
//   MatListModule,
//   MatSidenavModule,
//   MatToolbarModule,
// } from '@angular/material';
import { MaterialModule} from './../../features/modules/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../app.routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DashboardComponent} from './../dashboard/dashboard.component';
import { MyNavComponent } from './my-nav.component';
import { FlickrComponent } from './../flickr/flickr.component';
import { MovieItemComponent } from './../movies/movie-item/movie-item.component';
import { MyMoviesComponent } from './../movies/my-movies/my-movies.component';
import { ViewMovieComponent } from './../movies/view-movie/view-movie.component';

describe('MyNavComponent', () => {
  let component: MyNavComponent;
  let fixture: ComponentFixture<MyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyNavComponent, DashboardComponent, FlickrComponent, MovieItemComponent, MyMoviesComponent, ViewMovieComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MaterialModule.forRoot(), FormsModule, ReactiveFormsModule,
        ScrollingModule,
        // MatButtonModule,
        // MatIconModule,
        // MatListModule,
        // MatSidenavModule,
        // MatToolbarModule,
        RouterTestingModule.withRoutes(routes)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
