import { Component, DoCheck, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Film } from 'src/app/core/models/film.model';
import { Showtime } from '../../../../../core/models/showtime.model';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ShowtimeService } from 'src/app/core/services/showtime/showtime.service';
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";

const userResult = localStorage.getItem('userResult');

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIcon,
    NgForOf
  ],
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit, DoCheck {

  @Input() showtime: Showtime | undefined;
  @Output() ticketData: EventEmitter<{ quantity: number, totalPrice: number }> = new EventEmitter();

  data!: any;
  empOfferForm: FormGroup;
  FilmProfile!: Film;
  ShowtimeProfile!: Showtime;
  count = 0;
  totalPrice = 0;

  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  selectedQuantity: number = 1; // Valor inicial

  constructor(
    private _fb: FormBuilder,
    private _showtimeService: ShowtimeService,
  ){
    this.empOfferForm = this._fb.group({
      selectedQuantity: [1] // Valor inicial
    });

    // Escuchar los cambios en el formulario
    this.empOfferForm.get('selectedQuantity')?.valueChanges.subscribe(value => {
      this.selectedQuantity = value;
      this.updateTotalPrice();
    });
  }


  ngOnInit(): void {

  }

  onFormSubmit(){
  }

  ngDoCheck() {
    this.updateTotalPrice();
  }


  getShowtimebyId(id: number) {
    this._showtimeService.getShowtimebyId(id).subscribe((res: any) => {
      this.showtime = res;
      //console.log('Showtime actualizado:', this.showtime);
      this.updateTotalPrice();
    });
  }



  updateTotalPrice(): void {
    //console.log('Cantidad seleccionada:', this.selectedQuantity);
    const unitPrice = this.showtime?.unitPrice || 0;
    this.totalPrice = unitPrice * this.selectedQuantity;
    this.ticketData.emit({ quantity: this.selectedQuantity, totalPrice: this.totalPrice });
  }


}
