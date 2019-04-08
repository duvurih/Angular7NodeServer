import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../../app.routes';
import { MovieItemComponent } from './movie-item.component';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import {MyMoviesComponent} from './../my-movies/my-movies.component';
import {ViewMovieComponent} from './../view-movie/view-movie.component';
import {FlickrComponent} from './../../flickr/flickr.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        ScrollingModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [ MovieItemComponent, DashboardComponent, MyMoviesComponent, ViewMovieComponent, FlickrComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
