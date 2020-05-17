import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieItemComponent } from './shared/movie-item/movie-item.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MovesInCategoryComponent } from './pages/categories/movies-in-category/moves-in-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    MovesInCategoryComponent,
    MovieItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
