import { getBusinessId } from 'src/app/util';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { NewShowtimeDialogComponent } from './new-showtime-dialog/new-showtime-dialog.component';

@Component({
  selector: 'app-admin-schedule-films',
  templateUrl: './admin-schedule-films.component.html',
  styleUrls: ['./admin-schedule-films.component.scss'],
  standalone: true
})
export class AdminScheduleFilmsComponent implements OnInit {
  @Input() availableFilmId: any;
  businessId: number = getBusinessId();

  constructor(
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  openNewShowtime() {
    const dialogRef = this._matDialog.open(NewShowtimeDialogComponent, {
      width: '650px',
      data: {
        availableFilmId: this.availableFilmId,
      },
    })
  }
}
