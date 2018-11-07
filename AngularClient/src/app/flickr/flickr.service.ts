import { Injectable } from '@angular/core';

import { DataContextService } from './../../common/services/data-context.service';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private dataContextService: DataContextService) { }

  httpGetFlickrImages(search: String) {
    return this.dataContextService.httpGet('http://localhost:3000/flickr', null, false, true);
  }

}
