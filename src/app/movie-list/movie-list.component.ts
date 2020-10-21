import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() feeds;
  moviePosterLink;
  watchList = [];
  constructor(private activatedRoute: Router, private router: Router, private movieService: MovieDataService) {
    // console.log(this.activatedRoute.getCurrentNavigation().extras.state);
    this.feeds = this.activatedRoute.getCurrentNavigation().extras.state?.data;
    console.log('feeds data', this.feeds);
  }

  ngOnInit(): void {
    this.moviePosterLink = 'https://image.tmdb.org/t/p/w200';
    this.movieService.$searchDataListener.subscribe(res => {
      this.feeds = res
    })

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
      this.movieService.addToWatchList(watchMovie);
      watchMovie.selectedItem = true;
      console.log('watchlist', this.watchList);
    } else {
      // is in array so we remove from array
      let index = this.watchList.findIndex(movie => movie.id === id);
      this.movieService.removeFromWatchList(index);
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
