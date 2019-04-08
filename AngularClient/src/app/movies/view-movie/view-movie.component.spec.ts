import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewMovieComponent } from './view-movie.component';
import { MovieItemComponent } from './../movie-item/movie-item.component';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../../app.routes';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import {MyMoviesComponent} from './../my-movies/my-movies.component';
import {FlickrComponent} from './../../flickr/flickr.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('ViewMovieComponent', () => {
  let component: ViewMovieComponent;
  let fixture: ComponentFixture<ViewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        ScrollingModule,
        FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ ViewMovieComponent, MovieItemComponent, DashboardComponent, MyMoviesComponent, FlickrComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
