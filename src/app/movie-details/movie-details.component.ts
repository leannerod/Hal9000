import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  feeds;
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.feeds = data;
    });
  }
}
