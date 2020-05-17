import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './moves-in-category.component.html',
  styleUrls: ['./moves-in-category.component.css'],
})
export class MovesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor() {}

  ngOnInit() {}
}
