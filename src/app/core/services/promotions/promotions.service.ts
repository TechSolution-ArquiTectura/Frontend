import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../../models/promotion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {

  private apiUrl = `${environment.apiUrl}/promotions`;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }

  getPromotionById(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.apiUrl}/${id}`);
  }

  getPromotionsByBusinessId(businessId: number): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.apiUrl}/business/${businessId}`);
  }

  postPromotion(promotion: Promotion): void {
    this.http.post<Promotion>(this.apiUrl, promotion).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Hubo un problema al crear la promoción', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  putPromotion(promotion: Promotion, id: number): void {
    console.log(promotion);
    this.http.put<Promotion>(`${this.apiUrl}/${id}`, promotion).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Hubo un problema al modificar la promoción', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  deletePromotionById(id: number): Observable<Promotion> {
    return this.http.delete<Promotion>(`${this.apiUrl}/${id}`);
  }
}
