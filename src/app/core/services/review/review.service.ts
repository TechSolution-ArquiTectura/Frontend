import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from '../../models/review.models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'https://backend-production-d5ba.up.railway.app/api/TuCine/v1';

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  get refresh$(){
    return this._refresh$;
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl+'/reviews');
  }

  postReview(data: Review): Observable<any>{
    return this.http.post(this.apiUrl+'/reviews', data).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public getReviewsByBusinessId(businessId: Number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews/${businessId}`);
  }
}