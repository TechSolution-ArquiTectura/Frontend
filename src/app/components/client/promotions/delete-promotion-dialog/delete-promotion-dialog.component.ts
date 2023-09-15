import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-promotion-dialog',
  templateUrl: './delete-promotion-dialog.component.html',
  styleUrls: ['./delete-promotion-dialog.component.scss'],
})
export class DeletePromotionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePromotionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isDeletePromotion: boolean }
  ) {}
  deletePromotion() {
    this.dialogRef.close({ isDeletePromotion: true });
  }
  closeDeletePromotionDialog() {
    this.dialogRef.close();
  }
}
