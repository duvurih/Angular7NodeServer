import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardObservationComponent } from './view-card-observation.component';

describe('ViewCardObservationComponent', () => {
  let component: ViewCardObservationComponent;
  let fixture: ComponentFixture<ViewCardObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
