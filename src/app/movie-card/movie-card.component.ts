import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  getGenre(name: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: { title: name, content: description,}
    })
  }

  getOneDirector(name: string, bio: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {title: name, content: bio, }
    })
  }

  getSynopsis(description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: { title: 'Description', content: description, }
    })
  }

  addFavorite(_id: string): void {
    this.fetchApiData.addFavoriteMovie(_id).subscribe((Response: any) => {
      this.snackBar.open('Movie was added to favorites', 'OK', {
        duration: 2000
      })
    })
  }

  isFavorite(_id: string): boolean {
    return this.fetchApiData.isFavoriteMovie(_id)
  };

  removeFavorite(_id: string): void {
    this.fetchApiData.deleteFavoriteMovie(_id).subscribe((Response: any) => {
      this.snackBar.open('Removed from favorite movies', 'OK', {
        duration: 2000
      })
    })
  }

}