import { Component, Input } from '@angular/core';

@Component({
  selector: 'film-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.scss']
})
export class BookingStepperComponent {
  @Input() filmId: any;
  
}
