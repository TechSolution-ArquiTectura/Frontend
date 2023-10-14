import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from '../../models/review.models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'https://backend-production-d5ba.up.railway.app/api/TuCine/v1';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl+'/reviews');
  }

  postReview(data: Review): Observable<any>{
    return this.http.post(this.apiUrl+'/reviews', data);
  }

  public getReviewsByBusinessId(businessId: Number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews/${businessId}`);
  }
}