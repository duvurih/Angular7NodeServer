import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DataContextService } from './../../common/services/data-context.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private dataContextService: DataContextService) { }

  async httpGetMoviesImages() {
    return await this.dataContextService.httpGetAsync('http://localhost:3000/movies', null, false, true);
  }
}
