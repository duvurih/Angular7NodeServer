import { Injectable } from '@angular/core';
import { Observable, of, pipe, BehaviorSubject } from 'rxjs';
import { map, catchError, debounceTime, publishReplay } from 'rxjs/operators';

import { DataContextService } from './../../common/services/data-context.service';
import { FlickerItem } from './flickr.model';


@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickerItemSubject = new BehaviorSubject([FlickerItem]);

  constructor(private dataContextService: DataContextService) { }

  async httpGetFlickrImages(search: String) {
    return await this.dataContextService.httpGetAsync('http://localhost:3000/flickr', null, false, true);
    // return this.dataContextService.httpGet('http://localhost:3000/flickr', null, false, true).subscribe((data) => {
    //     return this.flickerItemSubject.next(data);
    //   });
  }

}
