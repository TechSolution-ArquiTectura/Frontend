import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Showtime } from 'src/app/core/models/showtime.model';
import { ShowtimeService } from 'src/app/core/services/showtime/showtime.service';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { User } from 'src/app/core/models/users.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { PaymentComponent } from '../../../../payment/payment/payment.component';
import { TicketService } from 'src/app/core/services/ticket/ticket.service';
import { BookingSuccessComponent } from '../booking-success/booking-success.component';
import { MatDialog } from '@angular/material/dialog';
import { FilmProfileComponent } from "../film-profile/film-profile.component";
import { MatIcon } from "@angular/material/icon";
import { BookTicketComponent } from "../../book-ticket/book-ticket.component";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatError, MatFormField } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatInput } from "@angular/material/input";
import { NgIf } from "@angular/common";
import { MetamaskHomeComponent } from "../metamask-home/metamask-home.component";
/*import { CryptomusComponent } from '../cryptomus/cryptomus.component';*/
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EthPaymentService } from 'src/app/services/eth-payment.service';


const postalcode = /^[0-9]{5}$/;
const cvv = /^[0-9]{3}$/;

@Component({
  selector: 'film-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    FilmProfileComponent,
    MatIcon,
    BookTicketComponent,
    MatCard,
    MatFormField,
    MatCardContent,
    MatButton,
    ReactiveFormsModule,
    FormsModule,
    MatCheckbox,
    MatInput,
    MatError,
    NgIf,
    MetamaskHomeComponent,
    /*CryptomusComponent,*/
    HttpClientModule,
  ],
  styleUrls: ['./booking-stepper.component.scss']
})
export class BookingStepperComponent implements OnInit {

  showtimeId: number | undefined;
  userId: number | undefined;
  user: User | undefined;
  selectedQuantity: number = 1;
  totalPrice: number = 0;
  ticket: Ticket = {
    user: { id: 1 }, // Asegúrate de obtener el ID del cliente correctamente
    showtime: { id: 1 }
  }

  empPaymentForm: FormGroup;

  payment = {
    user: {
      id: 0,
    },
    paymentToken: '',
  };

  @ViewChild(MatStepper)
  stepper!: MatStepper;

  showtime: Showtime | undefined;

  constructor(
    private _fb: FormBuilder,
    private _showtimeService: ShowtimeService,
    private _personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private _paymentService: CinephileProfileService,
    private _ticketService: TicketService,
    private dialog: MatDialog,
    private _ethPaymentService: EthPaymentService, // Inyectar el servicio
    private http: HttpClient // Inyectar HttpClient
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
    this.route.queryParams.subscribe(params => {
      this.getShowtimebyId(params['showtimeId']);
      this.showtimeId = Number(params['showtimeId']);
      this.getPersonById(this.userId ? this.userId : 0);
    });
  }


  getShowtimebyId(id: number) {
    this._showtimeService.getShowtimebyId(id).subscribe((res: any) => {
      this.showtime = res;
      //console.log(this.showtime);
    });
  }

  getPersonById(id: number) {
    this._personService.getPersonById(id).subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
    });
  }

  receiveTicketData(data: { quantity: number, totalPrice: number }) {
    this.selectedQuantity = data.quantity;
    this.totalPrice = data.totalPrice;
    //console.log('Datos recibidos:', data);
    // Aquí puedes usar los valores recibidos como desees
    this.ticket.numberSeats = this.selectedQuantity;
    this.ticket.totalPrice = this.totalPrice;
  }

  goToRegister() {
    const currentUrl = this.router.url; // Obtén la URL actual
    this.router.navigate(['authPage/register/:cinephile']);
  }

  goToSignIn() {
    const currentUrl = this.router.url; // Obtén la URL actual
    this.router.navigate(['authPage'], { queryParams: { returnUrl: currentUrl } });
  }

  selectedPayment!: 'ethereum' | 'creditCard' | 'cryptomus';

  selectPayment(paymentMethod: 'ethereum' | 'creditCard' | 'cryptomus') {
    this.selectedPayment = paymentMethod;
  }

  /*ethereum page*/

  async getEthConversionRate(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.http.get<any>('/api/v2/tools/price-conversion', {
        params: {
          amount: 1,
          symbol: 'ETH',
          convert: 'PEN'
        },
        headers: {
          'X-CMC_PRO_API_KEY': 'YOUR_API_KEY'
        }
      }).subscribe(
        (response: any) => {
          const conversionRate = response.data[0].quote['PEN'].price;
          resolve(conversionRate);
        },
        (error: HttpErrorResponse) => {
          console.error('Error getting conversion rate:', error);
          reject(error);
        }
      );
    });
  }


  async convertSolesToEther(soles: number): Promise<number> {
    const exchangeRate = await this.getEthConversionRate();
    const ethers = soles / exchangeRate;
    return parseFloat(ethers.toFixed(8)); // Redondeamos a 8 decimales para mayor precisión
  }


  async onEthereumPayment() {
    try {
      await this._ethPaymentService.switchToBaseSepoliaNetwork(); // Asegúrate de estar en la red Base Sepolia antes de hacer el pago
      const walletAddress = await this._ethPaymentService.connectWallet();
      if (walletAddress) {
        const etherAmount = await this.convertSolesToEther(this.totalPrice);
        console.log("Ether Amount:", etherAmount);
        await this._ethPaymentService.makePayment(walletAddress, etherAmount.toString()); // Convert etherAmount to string
        this.ticket.user.id = this.userId!;
        this.ticket.showtime.id = this.showtimeId!;
        this.ticket.numberSeats = Number(this.selectedQuantity);
        this.ticket.paymentToken = walletAddress;
        this.ticket.totalPrice = this.totalPrice;
        this._ticketService.addTicket(this.ticket).subscribe(
          (res) => {
            this.openSuccessDialog();
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        alert('Failed to connect wallet');
      }
    } catch (error) {
      console.error(error);
      alert('Payment failed');
    }
  }

  /*   PaymentComponent */

  onFormSubmit() {
    if (this.selectedPayment === 'ethereum') {
      this.onEthereumPayment();
    } else if (this.empPaymentForm.valid) {
      const formValue = { ...this.empPaymentForm.value };
      this.payment.user.id = this.userId!;
      this.payment.paymentToken = formValue.card_number;
      this._paymentService.postPaymentMethod(this.payment).subscribe(
        (res) => { },
        (err) => {
          console.log(err);
        }
      );

      this.ticket.user.id = this.userId!;
      this.ticket.showtime.id = this.showtimeId!;
      this.ticket.numberSeats = Number(this.selectedQuantity);
      this.ticket.paymentToken = formValue.card_number;
      this.ticket.totalPrice = this.totalPrice;
      this._ticketService.addTicket(this.ticket).subscribe(
        (res) => {
          this.openSuccessDialog();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Please fill the form correctly');
    }
  }


  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(BookingSuccessComponent, {
      width: '400px', // Puedes ajustar el tamaño según tus necesidades
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // El usuario hizo clic en alguna opción, manejar lógica aquí si es necesario
      } else {
        // El usuario cerró el diálogo, manejar lógica aquí si es necesario
      }
    });
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
