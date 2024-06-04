import { Component, OnInit, ViewChild  } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { YtVideoService } from 'src/app/core/services/yt-video/yt-video.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Film } from 'src/app/core/models/film.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { isBusiness } from 'src/app/util';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {ShowtimesTableComponent} from "../showtime-table/showtimes-table/showtimes-table.component";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {AdminScheduleFilmsComponent} from "../admin-schedule-films/admin-schedule-films.component";
import {FlexModule} from "@angular/flex-layout";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    ShowtimesTableComponent,
    UpperCasePipe,
    AdminScheduleFilmsComponent,
    MatExpansionPanelHeader,
    FlexModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./profile.component.scss']

})
export class ProfileComponent implements OnInit {
  idPost: any;
  availableFilmId: any;
  FilmProfile!: Film;
  panelOpenState = false;
  ActorList: any[] = [];
  isBusiness: boolean = isBusiness();
  url!: string;
  videoDetails: any;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

   constructor(
    private _servMoviesProfile: FilmsProfileService,
    private _ytVideo: YtVideoService,
    private route : ActivatedRoute,
    private sanitizer: DomSanitizer,
    private _dialog: MatDialog,
   ){
    this.route.params.subscribe(params => {
      this.idPost = params['filmId'] ?? 1;
      this.availableFilmId = params['availableFilmId'] ?? 0;
    });
   }

  ngOnInit(): void {
    this.getMoviebyId(this.idPost);
    this.getActorListbyFilmId(this.idPost);
  }

  async getMoviebyId(id: number){

    try{
      this.FilmProfile = await this._servMoviesProfile.getMoviebyId(id).toPromise();
      this.getVideoDetails(this.FilmProfile.trailer);
    }catch
    {
      console.log("Error");
    }

/*     this._servMoviesProfile.getMoviebyId(id).subscribe((res) => {
      this.FilmProfile = res;
      console.log(this.FilmProfile.title);
      this.getVideoDetails(this.FilmProfile.trailer)
    }, (err) => { console.log(err); }
    ); */
  }

  getVideoDetails(videoUrl: string) {
    this._ytVideo.getVideoDetails(videoUrl)
      .subscribe((data: any) => {
        this.videoDetails = data.items[0].snippet;
      });
  }

  getSafeTrailerUrl() {
    this.url = this.FilmProfile.trailer;
    if (this.url.startsWith('https://www.youtube.com/watch?v=')) {
      this.url = this.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
    } else if (this.url.startsWith('https://youtu.be')) {
      var temp = this.url.split('?si=');
      this.url = temp[0];
      this.url = this.url.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }


  // Detalles de la pelicula
  getActorListbyFilmId(Film_id: number) {
    return this._servMoviesProfile.getFilmActorbyFilmId(Film_id).subscribe((res) => {

      res.forEach((element: any) => {
          element.Actor = element.firstName + " " + element.lastName;
          this.ActorList.push(element);
      });
    }, (err) => { console.log(err); }
    );
  }

}

