import { Component,Input } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {

  @Input() imageUrl!: string;
  @Input() altText!: string;

  changeMovieImage(direction: string) {
  }
}
