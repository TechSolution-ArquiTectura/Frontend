import { Component, Input } from '@angular/core';
import { Film } from 'src/app/core/models/film.model';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterLink} from "@angular/router";
import {NotFoundComponent} from "../../../../shared/not-found/not-found.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-weekly-film',
  templateUrl: './weekly-film.component.html',
  styleUrls: ['./weekly-film.component.scss'],
  imports: [
    NgxPaginationModule,
    RouterLink,
    NotFoundComponent,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class WeeklyFilmComponent {
  p: number = 1;

  @Input()
  public movies: Film[] = [];
}
