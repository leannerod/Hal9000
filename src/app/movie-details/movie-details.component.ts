import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MovieDataService} from '../movie-data.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  feeds;
  constructor(private activatedRoute: Router, private movieDataService: MovieDataService) {
    console.log(this.activatedRoute.getCurrentNavigation().extras.state);
    this.feeds = this.activatedRoute.getCurrentNavigation().extras.state;
    console.log('feeds data', this.feeds);
  }

  ngOnInit() {}
  addToWatchList() {
    this.movieDataService.addToWatchList(this.feeds);
  }
}
