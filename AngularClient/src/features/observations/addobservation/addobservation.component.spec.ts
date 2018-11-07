import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddobservationComponent } from './addobservation.component';

describe('AddobservationComponent', () => {
  let component: AddobservationComponent;
  let fixture: ComponentFixture<AddobservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddobservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddobservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
