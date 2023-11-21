import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableFilmsService } from 'src/app/core/services/available-films/available-films.service';
import { NewMovieComponent } from './new-movie/new-movie/new-movie.component';
import { MatDialog } from '@angular/material/dialog';
import { isBusiness } from 'src/app/util';

@Component({
  selector: 'cineclubs-movies-available',
  templateUrl: './movies-available.component.html',
  styleUrls: ['./movies-available.component.scss']
})
export class MoviesAvailableComponent implements OnInit {
  idPost: any;
  films: any[] = [];
  dateAvailable: string[] = [];
  isProfile: any;
  isBusiness: boolean = isBusiness();

  constructor(
    private _empServiceShowtime: AvailableFilmsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.isProfile = this.router.url.endsWith('perfil-cineclub');
    if(this.isProfile) {
      this.idPost = JSON.parse(localStorage.getItem('businessId') ?? '{}');
    } else {
      this.idPost = this.route.snapshot.paramMap.get('id');
    }
   }

  ngOnInit(): void {
   this._empServiceShowtime.getAvailableFilmsByCineclubId(this.idPost).subscribe({
      next: (res) => {
        this.films = res;
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewMovieComponent);

    dialogRef.afterClosed().subscribe(() => {
      this._empServiceShowtime.getAvailableFilmsByCineclubId(this.idPost).subscribe({
        next: (res) => {
          this.films = res;
        }
      })
    });
  }
}
