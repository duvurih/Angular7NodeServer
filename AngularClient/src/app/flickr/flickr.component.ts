import { Component, OnInit } from '@angular/core';

import { Observable, of, pipe } from 'rxjs';
import { map, catchError, debounceTime, publishReplay, shareReplay } from 'rxjs/operators';

import { FlickrService } from './flickr.service';
import { FlickerItem } from './flickr.model';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css']
})
export class FlickrComponent implements OnInit {

  // public flickerItems: Observable<FlickerItem[]>;
  flickerItems$;
  searchTag: String = 'Flowers';
  dynamicCols: Number = 2;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    if (window.innerWidth <= 400) {
      this.dynamicCols = 1;
    } else if (window.innerWidth <= 768) {
      this.dynamicCols = 1;
    } else {
      this.dynamicCols = 2;
    }
    this.retrieveImages(this.searchTag);
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.dynamicCols = 1;
    } else if (event.target.innerWidth <= 768) {
      this.dynamicCols = 1;
    } else {
      this.dynamicCols = 2;
    }
  }

  retrieveImages(search: String) {
    this.flickerItems$ = this.flickrService.httpGetFlickrImages(search);
    this.flickerItems$.then((response) => { console.log(response); });
  }

}
