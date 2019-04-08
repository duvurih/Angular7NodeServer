import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SharedDataService = TestBed.get(SharedDataService);
    expect(service).toBeTruthy();
  });
});
