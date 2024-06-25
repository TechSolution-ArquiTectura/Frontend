import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularNowService {

  private apiURL = `${environment.apiUrl}/popular-now`;
  
  constructor(private _http: HttpClient) {}

  addPopularEventNow(data: any): Observable<any>{
    return this._http.post(this.apiURL,data);
  }

  updatePopularEventNow(id: number, data: any): Observable<any>{
    return this._http.put(`${this.apiURL}/${id}`,data);
  }

  getPopularEventNowList(): Observable<any>{
    return this._http.get(this.apiURL);
  }

  deletePopularEventNow(id: number): Observable<any>{
    return this._http.delete(`${this.apiURL}/${id}`)
  }
}
