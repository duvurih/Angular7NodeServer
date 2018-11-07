import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewobservationComponent } from './viewobservation.component';

describe('ViewobservationComponent', () => {
  let component: ViewobservationComponent;
  let fixture: ComponentFixture<ViewobservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewobservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
