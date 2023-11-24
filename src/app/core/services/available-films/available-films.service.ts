import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailableFilmsService {
  private apiURL="https://tucine-api.onrender.com/api/TuCine/v1/availableFilms"
  constructor(private http: HttpClient) { }
  
  public getAvailableFilmsByCineclubId(cineclubId: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${cineclubId}`);
  }

  postAvailableFilms(data: any): Observable<any>{
    return this.http.post(this.apiURL, data);
  }
}
