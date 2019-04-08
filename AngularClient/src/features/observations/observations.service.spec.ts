import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ObservationsService } from './observations.service';

describe('ObservationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ObservationsService = TestBed.get(ObservationsService);
    expect(service).toBeTruthy();
  });
});
