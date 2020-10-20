import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  public $searchDataListener = new Subject();
  constructor(private httpClient: HttpClient, private router: Router) {}
  getMovieData() {
    return this.httpClient.get<any>(
      'https://api.themoviedb.org/3/movie/550?api_key=2a73876fa79cb633ac3d9491816f49b2'
    );
  }
  getMovieSearchData(searchTerm: string): void {
    let searchParam = new HttpParams().set('query', searchTerm);
     this.httpClient.get(
      'https://api.themoviedb.org/3/search/movie?api_key=2a73876fa79cb633ac3d9491816f49b2&language=en-US&page=1&include_adult=false',
      { params: searchParam }
    ).subscribe((res: any) => {
      console.log(res)
      // this.$searchDataListener.next(res.results)
      this.router.navigateByUrl("/movieList",{
        state: {
          data: res.results,
        },
      })
    });
  }
  getMovieFilterData(certifications, genres, year): Observable<any> {
    let filterParam = new HttpParams()
      .set('certification.gte', certifications.toString())
      .set('with_genres', genres.toString())
      .set('year', year);
    return this.httpClient.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=2a73876fa79cb633ac3d9491816f49b2&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1',
      { params: filterParam }
    );
  }


}
