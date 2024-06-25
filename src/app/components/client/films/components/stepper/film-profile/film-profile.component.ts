import { Component, Input, OnInit } from '@angular/core';
import { Showtime } from 'src/app/core/models/showtime.model';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'stepper-film-profile',
  templateUrl: './film-profile.component.html',
  standalone: true,
  imports: [
    MatIcon
  ],
  styleUrls: ['./film-profile.component.scss']
})
export class FilmProfileComponent implements OnInit {
  @Input() showtime: Showtime | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
