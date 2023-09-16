import { Component } from '@angular/core';
import { ReviewComponent } from '../../../review/review.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  constructor(private dialog: MatDialog) {}

  dialogReview() {
    this.dialog.open(ReviewComponent);
  }
}
