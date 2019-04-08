import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { routes } from './../app.routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DashboardComponent } from './dashboard.component';
import { MyMoviesComponent} from './../movies/my-movies/my-movies.component';
import { ViewMovieComponent} from './../movies/view-movie/view-movie.component';
import { FlickrComponent} from './../flickr/flickr.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, MyMoviesComponent, ViewMovieComponent, FlickrComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        FormsModule, ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        ScrollingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
