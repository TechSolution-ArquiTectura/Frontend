import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCriptoService {

  private apiUrl = 'https://pro-api.coinmarketcap.com/v2/tools/price-conversion';

  constructor(private http: HttpClient) { }

  convertPrice(amount: number, symbol: string, convert: string): Observable<any> {

    //Config for deployment
    //Comment in case you are working on deployment
/*    const headers = {
      'Accepts': 'application/json',
      'X-CMC_PRO_API_KEY': '8854cad8-4593-4609-a6d5-eccc36514c7d'
    };*/

    const params = {
      amount: amount.toString(),
      symbol: symbol,
      convert: convert
    };

    //Config for deployment
/*    return this.http.get(this.apiUrl, { params, headers });*/

    //Config for development
    return this.http.get('/api/v2/tools/price-conversion', { params });
  }
}
