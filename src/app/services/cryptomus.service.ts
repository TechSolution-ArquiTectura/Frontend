import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptomusService {
  private baseUrl = 'http://localhost:3000'; //  URL correcto deL backend

  constructor(private http: HttpClient) { }

  checkout(amount: number, currency: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkout`, { amount, currency });
  }
}
