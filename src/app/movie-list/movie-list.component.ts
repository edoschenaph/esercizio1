import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movielist: Movie[];
  @Output() showmovie = new EventEmitter<any>();
  @Output() editmovie = new EventEmitter<any>();
  filmDetailId: any = null
  constructor() { }
  vediInfo(id: number) {
    this.filmDetailId = id;
    this.showmovie.emit(this.filmDetailId);

  }
  editDetail(id: number) {
    this.filmDetailId = id;
    this.editmovie.emit(this.filmDetailId);

  }
  ngOnInit(): void {
  }

}
