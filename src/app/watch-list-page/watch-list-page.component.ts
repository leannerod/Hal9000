import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDataService} from '../movie-data.service'

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.scss'],
})
export class WatchListPageComponent implements OnInit {
  watchList = [];
  moviePosterLink;
  selectedItem: boolean = true;
  feeds;
  movie;

  constructor(private activatedRoute: Router, private router: Router, private movieDataService: MovieDataService) {
    const state = this.activatedRoute.getCurrentNavigation().extras.state;
    if (state) {
      this.watchList = state.data;
    }
  }

  ngOnInit(): void {
    this.moviePosterLink = 'https://image.tmdb.org/t/p/w200';
    this.watchList = this.movieDataService.getWatchList();
  }
  removeFromWatchList(i) {
    this.watchList.splice(i,1);
  }

  routeToDetails(id) {
    const data = this.watchList.find((x) => x.id === id);
    this.router.navigateByUrl('/movieDetails', {
      state: {
        data: data,
      },
    });
    console.log('data', data);
  }

}
