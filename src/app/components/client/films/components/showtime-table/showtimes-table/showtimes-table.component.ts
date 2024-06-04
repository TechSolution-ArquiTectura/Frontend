import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { Showtime } from '../../../../../../core/models/showtime.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet/bottom-sheet.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {NotFoundComponent} from "../../../../../shared/not-found/not-found.component";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'film-showtimes-table',
  templateUrl: './showtimes-table.component.html',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    NotFoundComponent,
    MatButton,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./showtimes-table.component.scss']
})

export class ShowtimesTableComponent implements OnInit{

  @Input() filmId!: number;
  @Output() buyTicket = new EventEmitter<any>();


  selectedDate: string = '';
  data: Showtime[] = [];
  uniquePlayDates: string[] = [];
  businessWithFunctions: any[] = [];
  selectedTabIndex: number = 0;

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    this.selectedDate = this.uniquePlayDates[index];
    this.updateBusinessWithFunctions();
  }


  constructor(
    private _filmsProfileService: FilmsProfileService,
    private bottomSheet: MatBottomSheet
  ) {

  }

  ngOnInit(): void {
    this.getShowtimesbyFilmId(this.filmId);
  }


  getShowtimesbyFilmId(id: number){
    this._filmsProfileService.getShowtimesbyFilmId(id).subscribe((entryData) => {
      this.data = entryData;
      const uniquePlayDates = Array.from(new Set(entryData.map((item: any) => item.playDate)));
      this.uniquePlayDates = uniquePlayDates as string[];
      console.log(this.uniquePlayDates);
    }, (err) => { console.log(err); });
  }


  updateBusinessWithFunctions(): void {
    if (this.selectedDate) {
      const functionsForDate = this.data.filter((item) => item.playDate === this.selectedDate);
      const uniqueBusinesses = Array.from(new Set(functionsForDate.map((item) => item.availableFilm.business)));

      this.businessWithFunctions = uniqueBusinesses.map((business) => {
        const functionsForBusiness = functionsForDate.filter((item) => item.availableFilm.business.name === business.name);
        const playtimes = functionsForBusiness.map((item) => ({
          id: item.id, // ID del showtime
          playtime: item.playtime,
        }));

        return {
          name: business.name,
          address: business.address,
          playtimes: playtimes,
        };
      });

      // Eliminamos duplicados después de la agrupación
      this.businessWithFunctions = this.removeDuplicates(this.businessWithFunctions, 'name');
    }
  }

  // Resto del código...

  showBottomSheet(playtime: { id: number, playtime: string }, business: any): void {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetComponent, {
      data: { playtime, business },
    });
  }


  removeDuplicates(array: any[], key: string) {
    return array.filter((obj, index, self) =>
      index === self.findIndex((o) => (
        o[key] === obj[key]
      ))
    );
  }

  formatDate(date: string): string {
    const months = [
      'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
    ];
    const [day, month, year] = date.split('-');
    const shortMonth = months[parseInt(month, 10) - 1];
    return `${day} ${shortMonth}. ${year}`;
  }

}
