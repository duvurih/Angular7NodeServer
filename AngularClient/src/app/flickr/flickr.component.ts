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
  desktopCols: Number = 2;
  ipadCols: Number = 2;
  mobileCols: Number = 1;
  
  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    if (window.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (window.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.desktopCols;
    }
    this.retrieveImages(this.searchTag);
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (event.target.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.desktopCols;
    }
  }

  retrieveImages(search: String) {
    this.flickerItems$ = this.flickrService.httpGetFlickrImages(search);
    this.flickerItems$.then((response) => { console.log(response); });
  }

}
