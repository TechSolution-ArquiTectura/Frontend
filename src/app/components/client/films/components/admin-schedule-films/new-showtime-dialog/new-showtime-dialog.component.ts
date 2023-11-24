import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Showtime } from 'src/app/core/models/showtime.model';
import { ShowtimeService } from 'src/app/core/services/showtime/showtime.service';
import { format } from 'date-fns';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-showtime-dialog',
  templateUrl: './new-showtime-dialog.component.html',
  styleUrls: ['./new-showtime-dialog.component.scss'],
})
export class NewShowtimeDialogComponent {
  constructor(
    public _dialogRef: MatDialogRef<NewShowtimeDialogComponent>,
    private _showtimeService: ShowtimeService,
    private _snackBar: MatSnackBar,
    private buildr: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: { availableFilmId: number; showtime: Showtime }
  ) {
    if (data.showtime) {
      this.newFormBuilder.patchValue(data.showtime);
    }
  }

  newFormBuilder = this.buildr.group({
    capacity: this.buildr.control<number | undefined>(undefined),
    unitPrice: this.buildr.control<number | undefined>(undefined),
    playDate: this.buildr.control(''),
    playtime: this.buildr.control(''),
  });

  closeNewShowtimeDialog() {
    this._dialogRef.close();
  }

  saveShowtime() {
    const playDate = new Date(this.newFormBuilder.value.playDate as string);

    if (this.data.showtime) {
      this._showtimeService.putShowtime(
        {
          ...this.newFormBuilder.value,
          playDate: format(playDate, 'dd-MM-yyyy'),
          availableFilm: { id: this.data.showtime.availableFilm.id },
        } as Showtime,
        this.data.showtime.id as number
      );
      this.closeNewShowtimeDialog();
      this._snackBar.open('Función editada con éxito', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this._showtimeService.postShowtime({
      ...this.newFormBuilder.value,
      playDate: format(playDate, 'dd-MM-yyyy'),
      availableFilm: { id: this.data.availableFilmId },
    } as Showtime);
    this.closeNewShowtimeDialog();
    this._snackBar.open('Función añadida con éxito', 'Cerrar', {
      duration: 3000,
    });
  }
}
