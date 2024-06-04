import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CryptomusService } from 'src/app/services/cryptomus.service';

@Component({
  selector: 'app-cryptomus',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cryptomus.component.html',
  styleUrl: './cryptomus.component.scss'
})
export class CryptomusComponent {
  amount: number = 0;
  currency: string = 'USD';

  constructor(private cryptomusService: CryptomusService) { }

  checkout() {
    this.cryptomusService.checkout(this.amount, this.currency).subscribe(
      (response) => {
        console.log('Checkout response:', response);
      },
      (error) => {
        console.error('Checkout error:', error);
      }
    );
  }
}
