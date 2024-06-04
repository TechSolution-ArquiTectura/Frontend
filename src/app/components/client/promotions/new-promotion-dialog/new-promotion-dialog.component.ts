import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { Component, Inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Promotion } from 'src/app/core/models/promotion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { format } from 'date-fns';
import { getBusinessId } from 'src/app/util';
import {MatIcon} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatSuffix} from "@angular/material/form-field";

@Component({
  selector: 'app-new-promotion-dialog',
  templateUrl: './new-promotion-dialog.component.html',
  styleUrls: ['./new-promotion-dialog.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatIcon,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatSuffix
  ],
  standalone: true
})
export class NewPromotionDialogComponent {
  BUSINESS_ID: number = getBusinessId();

  constructor(
    public _dialogRef: MatDialogRef<NewPromotionDialogComponent>,
    private _promotionService: PromotionsService,
    private _snackBar: MatSnackBar,
    private buildr: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { promotion: Promotion }
  ) {
    if (data.promotion) {
      this.newFormBuilder.patchValue(data.promotion);
    }
  }

  newFormBuilder = this.buildr.group({
    name: this.buildr.control(''),
    description: this.buildr.control(''),
    initDate: this.buildr.control(''),
    endDate: this.buildr.control(''),
    discountPercentage: this.buildr.control<Float32Array | undefined>(
      undefined
    ),
    imageSrc: this.buildr.control(''),
  });

  closeNewPromotionDialog() {
    this._dialogRef.close();
  }

  savePromotion() {
    const initDate = new Date(this.newFormBuilder.value.initDate as string);
    const endDate = new Date(this.newFormBuilder.value.endDate as string);
    if (this.data.promotion) {
      this._promotionService.putPromotion(
        {
          ...this.newFormBuilder.value,
          initDate: format(initDate, 'dd-MM-yyyy'),
          endDate: format(endDate, 'dd-MM-yyyy'),
          business: { id: this.BUSINESS_ID },
        } as Promotion,
        this.data.promotion.id
      );
      this.closeNewPromotionDialog();
      this._snackBar.open('Promoción editada con éxito', 'Cerrar', {
        duration: 3000,
      });
      return;
    }
    console.log(this.newFormBuilder.value);
    this._promotionService.postPromotion({
      ...this.newFormBuilder.value,
      initDate: format(initDate, 'dd-MM-yyyy'),
      endDate: format(endDate, 'dd-MM-yyyy'),
      business: { id: this.BUSINESS_ID },
    } as Promotion);
    this.closeNewPromotionDialog();
    this._snackBar.open('Promoción añadida con éxito', 'Cerrar', {
      duration: 3000,
    });
  }
}
