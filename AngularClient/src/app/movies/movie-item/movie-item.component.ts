import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MovieItem } from '../models/movieItem.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieItem;
  @Input() showDescription = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewMovie() {
    this.router.navigate(['viewmovie/' + this.movie.name]);
  }

}
