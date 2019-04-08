import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataContextService } from './data-context.service';

describe('DataContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: DataContextService = TestBed.get(DataContextService);
    expect(service).toBeTruthy();
  });
});
