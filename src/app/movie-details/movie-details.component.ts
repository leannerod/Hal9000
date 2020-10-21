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
  selectedItem: boolean = false;
  watchList;

  constructor(private activatedRoute: Router, private movieDataService: MovieDataService) {
    console.log(this.activatedRoute.getCurrentNavigation().extras.state);
    this.feeds = this.activatedRoute.getCurrentNavigation().extras.state;
   
  }

  ngOnInit() {
    console.log(this.feeds.data);
    this.watchList = this.movieDataService.getWatchList()
    this.watchList.forEach((movie) => {
      if(movie.id === this.feeds.data.id) {
        this.selectedItem = true;
      }
    })
  }
  addToWatchList() {
    this.movieDataService.addToWatchList(this.feeds.data);
    this.selectedItem = true;
  }
}
