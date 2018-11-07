import { TestBed } from '@angular/core/testing';

import { DataContextService } from './data-context.service';

describe('DataContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataContextService = TestBed.get(DataContextService);
    expect(service).toBeTruthy();
  });
});
