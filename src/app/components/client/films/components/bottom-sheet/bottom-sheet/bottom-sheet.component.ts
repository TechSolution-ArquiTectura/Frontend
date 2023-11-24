import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {


  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private router: Router
    ) {}

    comprar(showtimeId: number): void {
      console.log(showtimeId);
      this.router.navigate(['/dashboard/peliculas/steps', showtimeId, 'booking'], {
        queryParams: { showtimeId }
      }).then(() => {
        this.closeBottomSheet();
      });
    }

  closeBottomSheet(): void {
    this.bottomSheetRef.dismiss();
  }

}
