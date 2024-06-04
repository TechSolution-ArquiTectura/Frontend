import { Component, Input } from '@angular/core';
import { InformationComponent } from '../Components/information/information.component';
import { PaymentFormComponent } from '../Components/payment-form/payment-form.component';
import { Promotion } from 'src/app/core/models/promotion';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  standalone: true,
  imports: [
    InformationComponent,
    PaymentFormComponent
  ],
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  //@Input() promotion!: Promotion;
}
