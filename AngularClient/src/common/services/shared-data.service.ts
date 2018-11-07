import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieItem } from './../../app/movies/models/movieItem.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _moviesItems: MovieItem[];

  constructor() { }

  public setMoviesData(movies: MovieItem[]) {
    this._moviesItems = movies;
  }

  public getMoviesData(): Observable<MovieItem[]> {
    return of(this._moviesItems);
  }
}
