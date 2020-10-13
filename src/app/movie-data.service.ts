import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private httpClient: HttpClient) {}
  getMovieData() {
    return this.httpClient.get<any>(
      'https://api.themoviedb.org/3/movie/550?api_key=2a73876fa79cb633ac3d9491816f49b2'
    );
  }
}
