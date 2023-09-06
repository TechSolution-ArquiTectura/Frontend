import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  private apiUrl = 'https://backend-production-3909.up.railway.app/api/TuCine/v1/promotions';

  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }
}

interface Promotion {
  name: string;
  description: string;
  initDate: string;
  endDate: string;
  business: {
    name: string;
  };
}