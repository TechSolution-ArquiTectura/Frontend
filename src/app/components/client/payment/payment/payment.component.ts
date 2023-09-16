import { Component, Input } from '@angular/core';
import { InformationComponent } from '../Components/information/information.component';
import { PaymentFormComponent } from '../Components/payment-form/payment-form.component';
import { Promotion } from 'src/app/core/models/promotion';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  //@Input() promotion!: Promotion;
}
