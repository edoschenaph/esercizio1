import { Component } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome: string = 'Welcome from parent'
  movies: Array<Movie> = MOVIES;
  title = 'esercizio1';
  selected = 'list';
  selectedmovie: any;
  movieId: any;
  cambia(type) {
    this.selected = type;
  }
  cambiawelcome(e: string) {
    this.welcome = e;
  }
  vediInfo(movieId: any) {
    this.movieId = movieId;
    this.selectedmovie = this.movies.find((value) => {
      return value.id === movieId
    });
    this.selected = 'detail'
  }
  editDetail(movieId: any) {
    this.movieId = movieId;
    this.selectedmovie = this.movies.find((value) => {
      return value.id === movieId
    });
    this.selected = 'edit'
  }
  updateMovie(movie: any) {
    let index = this.movies.findIndex((value) => {
      return value.id === movie.id
    })
    for (let prop in movie) {
      this.movies[index][prop] = movie[prop]
    }
  }
}