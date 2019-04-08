import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyMoviesComponent } from './my-movies.component';
import {RouterTestingModule} from '@angular/router/testing';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

describe('MyMoviesComponent', () => {
  let component: MyMoviesComponent;
  let fixture: ComponentFixture<MyMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        RouterTestingModule, FormsModule, ReactiveFormsModule, ScrollingModule, HttpClientModule ],
      declarations: [ MyMoviesComponent, DashboardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
