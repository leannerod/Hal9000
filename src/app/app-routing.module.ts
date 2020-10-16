import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchCriteriaComponent,
  },
  {
    path: 'movieList',
    component: MovieListComponent,
    data: { id: 1, name: 'rai' },
  },
  {
    path: 'watchList',
    component: WatchListPageComponent,
  },

  { path: 'movieDetails', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
