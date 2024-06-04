import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListCineclubsComponent } from '../list-cineclubs/list-cineclubs.component';
import { HomeComponent } from '../home/home.component';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-search-bar-cineclubs',
  templateUrl: './search-bar-cineclubs.component.html',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  styleUrls: ['./search-bar-cineclubs.component.scss']
})
export class SearchBarCineclubsComponent {

  @ViewChild("searchCineclubInput")
  public cineclubInput!:ElementRef<HTMLInputElement>;

  constructor(private homeComponent:HomeComponent){

  }

  searchCineClubs(){
    const searchQuery = this.cineclubInput.nativeElement.value;
      this.homeComponent.searchQuery=searchQuery;
      this.homeComponent.searchCineClubs();
  }

}
