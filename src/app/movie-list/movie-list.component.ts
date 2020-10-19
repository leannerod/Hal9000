import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() feeds;
  moviePosterLink;
  watchList = [];
  constructor(private activatedRoute: Router, private router: Router) {
    // console.log(this.activatedRoute.getCurrentNavigation().extras.state);
    this.feeds = this.activatedRoute.getCurrentNavigation().extras.state;
    // console.log('feeds data', this.feeds);
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   this.feeds = data;
    // });
    this.moviePosterLink = 'https://image.tmdb.org/t/p/w200';
  }

  routeToDetails(id) {
    const data = this.feeds.find((x) => x.id === id);
    this.router.navigateByUrl('/movieDetails', {
      state: {
        data: data,
      },
    });
    console.log('data', data);
  }

  watchListToggle(id) {
    const filteredWatchList = this.watchList.filter((movie) => {
      return movie.id === id;
    });

    const watchMovie = this.feeds.find((x) => x.id === id);

    if (filteredWatchList.length === 0) {
      // not in array so we add it to array
      this.watchList.push(watchMovie);
      watchMovie.selectedItem = true;
      console.log('watchlist', this.watchList);
    } else {
      // is in array so we remove from array
      this.watchList = this.watchList.filter((movie) => {
        return movie.id !== id;
      });
      watchMovie.selectedItem = false;
      console.log('watchList remove', this.watchList);
    }
  }

  routeToWatchList() {
    this.router.navigateByUrl('/watchList', {
      state: {
        data: this.watchList,
      },
    });
  }
}
