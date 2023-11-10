import { Component, Input, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'film-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.scss']
})
export class BookingStepperComponent {
  @Input() filmId: any;
  selectedElement: any; // Variable para almacenar la información seleccionada

  @ViewChild(MatStepper)
  stepper!: MatStepper;

  onBuyTicket(element: any) {
    this.selectedElement = element;
    this.stepper.selectedIndex = 1; // Avanzar al "paso 2"
  }
  
}
