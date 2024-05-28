import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvailableFilmsService {
  private apiUrl = `${environment.apiUrl}/availableFilms`;

  constructor(private http: HttpClient) { }
  
  public getAvailableFilmsByCineclubId(cineclubId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cineclubId}`);
  }

  postAvailableFilms(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data);
  }
}
