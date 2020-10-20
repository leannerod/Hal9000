import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieDataService } from '../movie-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  feeds;

  @Output() submitted = new EventEmitter();
  constructor( private movieDataService: MovieDataService,
    private router: Router) { }


  
  ngOnInit(): void {
  }
  movieSearchSubmit(form: NgForm) {
    this.submitted.emit({
      movieSearch: form.value.movieSearch,
    });
    console.log(form.value.movieSearch);

    this.movieDataService
      .getMovieSearchData(form.value.movieSearch);
  }
}
