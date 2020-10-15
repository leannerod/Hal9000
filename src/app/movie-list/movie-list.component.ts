import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  feeds;
  constructor(private activatedRoute: Router) {
    console.log(this.activatedRoute.getCurrentNavigation().extras.state);
    this.feeds = this.activatedRoute.getCurrentNavigation().extras.state;
    console.log('feeds data', this.feeds);
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   this.feeds = data;
    // });
  }
}
