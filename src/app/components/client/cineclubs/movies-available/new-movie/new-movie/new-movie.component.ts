import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Actor } from 'src/app/core/models/actor.models';
import { AvailableFilm } from 'src/app/core/models/available-films';
import { Film } from 'src/app/core/models/film.model';
import { ActorService } from 'src/app/core/services/actor/actor.service';
import { AvailableFilmsService } from 'src/app/core/services/available-films/available-films.service';
import { FilmService } from 'src/app/core/services/film/film.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import {MatStep, MatStepper, MatStepperNext} from "@angular/material/stepper";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatCardActions} from "@angular/material/card";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatCardActions,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatHint,
    MatError,
    MatDialogClose,
    MatButton,
    NgIf,
    MatStepperNext
  ],
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent {
  idCineclub: any;
  filmForm!: FormGroup;
  actorForm!: FormGroup;
  selectId: number = 3;
  filmId!: number;
  constructor(private _fb: FormBuilder,
    private filmService: FilmsProfileService,
    private actorService: ActorService,
    private availableFilmService: AvailableFilmsService) {
    this.filmForm = this._fb.group(
      {
        title: new FormControl('', [Validators.required, Validators.maxLength(255),]),
        year: new FormControl('', [Validators.required]),
        synopsis: new FormControl('', [Validators.required, Validators.maxLength(255),]),
        poster: new FormControl('', [Validators.required, Validators.maxLength(255),]),
        trailer: new FormControl('', [Validators.required, Validators.maxLength(255),]),
        duration: new FormControl('', [Validators.required,]),
      }
    );

    this.actorForm = this._fb.group(
      {
        firstName: new FormControl('', [Validators.required, Validators.maxLength(100),]),
        lastName: new FormControl('', [Validators.required, Validators.maxLength(100),]),
        biography: new FormControl('', [Validators.required, Validators.maxLength(255),]),
        birthday: new FormControl('', [Validators.required]),
      }
    );

    this.idCineclub = JSON.parse(localStorage.getItem('businessId') ?? '{}');
  }

  film: any = {
    id: 0,
    title: '',
    year: 0,
    synopsis: '',
    poster: '',
    trailer: '',
    duration: 0,
    contentRating:  {
      id: 0,
    }
  };

  actor: any = {
    id: 0,
    firstName: '',
    lastName: '',
    biography: '',
    birthday: ''
  };

  availableFilm: any = {
    id: 0,
    isAvailable: '',
    business: {
      id: 0,
    },
    film: {
      id: 0,
    }
  };

  onSelected(value:string): void {
		this.selectId = Number(value);
	}

  saveFilm() {
    if (this.filmForm.valid) {
      const formValue = { ...this.filmForm.value };

      this.film.title = formValue.title;
      this.film.year = formValue.year;
      this.film.synopsis = formValue.synopsis;
      this.film.poster = formValue.poster;
      this.film.trailer = formValue.trailer;
      this.film.duration = formValue.duration;
      this.film.contentRating.id = this.selectId;

      this.filmService.addMovieProfile(this.film).subscribe({
        next: (addedFilm: any) => {

          this.filmService.getFilms().subscribe({
            next: (res) => {
              res.forEach((_film) => {
                if (_film.title == this.film.title) {
                  this.filmId = _film.id;
                  this.availableFilm.business.id = this.idCineclub;
                  this.availableFilm.film.id = _film.id;
                  this.availableFilm.isAvailable = "1"; // 1: True

                  this.availableFilmService.postAvailableFilms(this.availableFilm).subscribe({
                    next: (addedAvailableFilm: any) => {
                    },
                    error: (error: any) => {
                      console.error(error);
                    },
                  });
                }
            });
            }
          })
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    }
  }

  saveActor() {
    if (this.actorForm.valid) {
      const formValue = { ...this.actorForm.value };

      this.actor.firstName = formValue.firstName;
      this.actor.lastName = formValue.lastName;
      this.actor.biography = formValue.biography;
      this.actor.birthday = formValue.birthday;

      this.actorService.postActor(this.actor).subscribe({
        next: (addedActor: any) => {

          this.actorService.getActors().subscribe({
            next: (res) => {
              res.forEach((_actor) => {
                if (_actor.firstName == this.actor.firstName) {
                  if (_actor.lastName == this.actor.lastName) {
                    this.actorService.postActorCineclub(this.filmId, _actor.id).subscribe({
                      next: (addedActorCineclub: any) => {
                        alert('Actor ' + _actor.firstName + " " + _actor.lastName + ' agregado al reparto de la película');
                      },
                      error: (error: any) => {
                        alert('Actor ' + _actor.firstName + " " + _actor.lastName + ' agregado al reparto de la película');
                      },
                    });;
                  }
                }
            });
            }
          })
        },
        error: (error: any) => {
          console.error(error);
        },
      });

      this.actorForm.reset();
    }
  }
}
