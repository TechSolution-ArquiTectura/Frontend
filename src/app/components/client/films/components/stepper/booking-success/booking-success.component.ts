import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent {
  constructor(
    private dialogRef: MatDialogRef<BookingSuccessComponent>,
    private router: Router
    ) { }

  goToFilms() {
    this.router.navigate(['/dashboard/peliculas']);
    this.dialogRef.close();

  }

  goToCineclubs() {
    this.router.navigate(['/dashboard/cineclubs']);
    this.dialogRef.close();
  }

}
