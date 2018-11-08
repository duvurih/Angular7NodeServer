import { Component, OnInit } from '@angular/core';

import { DataContextService } from './../../../common/services/data-context.service';
import { SharedDataService } from './../../../common/services/shared-data.service';
import { MoviesService } from './../movies.service';
import { MovieItem } from '../models/movieItem.model';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  // public movieItems: MovieItem[];
  movieItems$;
  searchTag: String = '';
  dynamicCols: Number = 3;
  mobileCols: Number = 1;
  ipadCols: Number = 2;
  viewGrid = true;

  constructor(
    private dataContextService: DataContextService,
    private sharedDataService: SharedDataService,
    private moviesService: MoviesService
    ) { }

  ngOnInit() {
    this.fetchMovies();
    if (window.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (window.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.dynamicCols;
    }
  }

  async fetchMovies() {
    this.movieItems$ = await this.moviesService.httpGetMoviesImages();
    this.movieItems$ = await this.sortMovies();
    await this.sharedDataService.setMoviesData(this.movieItems$);
  }

  async sortMovies() {
    return new Promise((resolve, reject) => {
      let movies: MovieItem[] = this.movieItems$;
      movies = movies.sort((left, right): number => {
        if (left.name < right.name) {
          return -1;
        }
        if (left.name > right.name) {
          return 1;
        }
        return 0;
      });
      resolve(movies);
    });
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (event.target.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.dynamicCols;
    }
  }

  retrieveImages(search: String) {
    this.movieItems$ = this.sharedDataService.getMoviesData()
      .then((data) => {
        if ( search === '') {
          this.movieItems$ = data;
        } else {
          this.movieItems$ = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
      });
  }
}
