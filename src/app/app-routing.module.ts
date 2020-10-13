import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: 'watchList',
    component: WatchListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
