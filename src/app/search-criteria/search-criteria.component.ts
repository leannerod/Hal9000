import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss'],
})
export class SearchCriteriaComponent implements OnInit {
  feeds;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit(): void {
    this.movieDataService.getMovieData().subscribe((data) => {
      console.log('data', data);
      this.feeds = data.data;
    });
  }
}
