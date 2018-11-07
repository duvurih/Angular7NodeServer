import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SharedDataService } from './../../../common/services/shared-data.service';
import { MovieItem } from '../models/movieItem.model';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  @Input() movie: MovieItem;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.sharedDataService.getMoviesData().subscribe(data => {
        this.movie = data.filter(item => item.name.toLowerCase().includes(params['name'].toLowerCase()))[0];
      });
    });
  }

  goBack() {
    this.router.navigate(['/movies']);
  }

}
