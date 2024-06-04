import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilmsComponent } from '../../films.component';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild("searchMovieInput")
  public movieInput!:ElementRef<HTMLInputElement>;

  constructor(private filmsComponent: FilmsComponent){

  }

  searchMovies() {
    const searchQuery = this.movieInput.nativeElement.value;
    this.filmsComponent.searchQuery=searchQuery;
    this.filmsComponent.searchMovies();

  }

}
