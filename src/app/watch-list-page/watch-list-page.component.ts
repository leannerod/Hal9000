import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.scss'],
})
export class WatchListPageComponent implements OnInit {
  watchList = [];
  moviePosterLink;

  constructor(private activatedRoute: Router) {
    console.log(
      'test',
      this.activatedRoute.getCurrentNavigation().extras.state
    );
    const state = this.activatedRoute.getCurrentNavigation().extras.state;
    if (state) {
      this.watchList = state.data;
    }
  }

  ngOnInit(): void {
    this.moviePosterLink = 'https://image.tmdb.org/t/p/w200';
  }
}
