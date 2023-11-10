import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AvailableFilm } from 'src/app/core/models/available-films';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';

@Component({
  selector: 'film-showtimes-table',
  templateUrl: './showtimes-table.component.html',
  styleUrls: ['./showtimes-table.component.scss']
})

export class ShowtimesTableComponent implements OnInit{
onBuyTicket($event: Event) {
throw new Error('Method not implemented.');
}

  @Input() filmId!: number;
  @Output() buyTicket = new EventEmitter<any>();
  
  displayedColumns: string[] = ['cineclub', 'category', 'price', 'date','time', 'action'];

  data: AvailableFilm[] = [];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _filmsProfileService: FilmsProfileService,
  ) { 
    
  }

  ngOnInit(): void {
    this.getShowtimesbyFilmId(this.filmId);
  }

  getShowtimesbyFilmId(id: number){
    this._filmsProfileService.getShowtimesbyFilmId(id).subscribe((entryData) => {  

      entryData.forEach((object: any) => {
        object.cineclub = "cineclub";
        object.category = "categoria";
        object.price = object.unitPrice;
        object.date = object.playDate;
        object.time = object.playtime;
        this.data.push(object);
      });
      this.dataSource.data = this.data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    }, (err) => { console.log(err); }
    );
  }

  openBuyTicket(element: any) {
    this.buyTicket.emit(element);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}
