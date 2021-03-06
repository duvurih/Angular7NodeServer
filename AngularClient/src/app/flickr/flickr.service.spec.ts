import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: FlickrService = TestBed.get(FlickrService);
    expect(service).toBeTruthy();
  });
});
