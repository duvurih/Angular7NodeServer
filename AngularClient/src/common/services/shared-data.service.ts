import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieItem } from './../../app/movies/models/movieItem.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _moviesItems$;

  constructor() { }

  public async setMoviesData(movies$) {
    this._moviesItems$ = movies$;
  }

  public async getMoviesData(): Promise<MovieItem[]> {
    return this._moviesItems$;
  }
}
