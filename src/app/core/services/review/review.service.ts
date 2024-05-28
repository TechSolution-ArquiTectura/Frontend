import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from '../../models/review.models';
import {Promotion} from "../../models/promotion";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = environment.apiUrl;

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

  deleteReviewById(reviewId: number): Observable<any> {
    const url = `${this.apiUrl}/reviews/${reviewId}`;
    return this.http.delete(url).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

}
