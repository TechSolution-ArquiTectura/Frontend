import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../../models/promotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  private apiUrl = 'https://backend-production-3909.up.railway.app/api/TuCine/v1/promotions';

  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }

  getPromotionById(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.apiUrl}/${id}`);
  }

  getPromotionsByBusinessId(businessId: number): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.apiUrl}/business/${businessId}`);
  }

  deletePromotionById(id: number): Observable<Promotion> {
    return this.http.delete<Promotion>(`${this.apiUrl}/${id}`);
  }
}
