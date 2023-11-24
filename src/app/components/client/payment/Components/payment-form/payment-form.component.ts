import { Component, OnInit } from '@angular/core';
import { ReviewComponent } from '../../../review/review.component';
import { MatDialog } from '@angular/material/dialog';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const postalcode  = /^[0-9]{5}$/;
const cvv  = /^[0-9]{3}$/;

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  empPaymentForm: FormGroup;
  userId: number | undefined;

  payment = {
    user: {
      id: 0,
    },
    paymentToken: '',
    //cardHolder: '',
    //expirationDate: '',
  };

  constructor(
    private _fb: FormBuilder,
    private dialog: MatDialog,
    private _paymentService: CinephileProfileService,
  ) {

    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);

    this.empPaymentForm = this._fb.group(
      {
        card_number: new FormControl('', [
          Validators.required,
          this.validateCardNumberLength.bind(this),
        ]),
        MMAA: new FormControl('', [
          Validators.required,
        ]),
        CVV: new FormControl('', [
          Validators.required,
          Validators.pattern(cvv),
        ]),
        first_name: new FormControl('', [
          Validators.required,
        ]),
        last_name: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        postal_code: new FormControl('', [
          Validators.required,
          Validators.pattern(postalcode),
        ]),
      }
    );
  }

  ngOnInit(): void {
    console.log(this.userId);
  }

  dialogReview() {

  }

  onFormSubmit() {

    if (this.empPaymentForm.valid) {
      const formValue = { ...this.empPaymentForm.value };
      this.payment.user.id = this.userId!;
      this.payment.paymentToken = formValue.card_number;
      console.log(this.payment);
      this._paymentService.postPaymentMethod(this.payment).subscribe(
        (res) => {
          console.log(res);
          alert('Payment method added successfully');
        },
        (err) => {
          console.log(err);
        }
      );

    } else {
      alert('Please fill the form correctly');
    }
  }

  formatCreditCardNumber(event: any): void {

    let value = event.target.value.replace(/\D/g, '');

    value = value.substring(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    this.empPaymentForm.patchValue({ card_number: value });
  }

  validateCardNumberLength(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    const isValidLength = value && value.replace(/\D/g, '').length === 16;

    return isValidLength ? null : { 'invalidLength': true };
  }

  formatExpiryDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 4) {
      value = value.substring(0, 4);
    }

    if (value.length >= 2) {
      const month = Math.min(parseInt(value.substring(0, 2), 10), 12);
      value = month.toString().padStart(2, '0') + value.substring(2);
      value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }

    this.empPaymentForm.patchValue({ MMAA: value });
  }

}
