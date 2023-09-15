import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-promotion-dialog',
  templateUrl: './new-promotion-dialog.component.html',
  styleUrls: ['./new-promotion-dialog.component.scss'],
})
export class NewPromotionDialogComponent {
  constructor(public dialogRef: MatDialogRef<NewPromotionDialogComponent>) {}

  closeNewPromotionDialog() {
    this.dialogRef.close();
  }
}
