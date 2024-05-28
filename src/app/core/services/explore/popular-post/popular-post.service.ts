import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularPostService {

  private apiURL = `${environment.apiUrl}/popular-post`;

  constructor(private _http: HttpClient) {}

  addPopularPost(data: any): Observable<any>{
    return this._http.post(this.apiURL,data);
  }

  updatePopularPost(id: number, data: any): Observable<any>{
    return this._http.put(`${this.apiURL}/${id}`,data);
  }

  getPopularPostList(): Observable<any>{
    return this._http.get(this.apiURL);
  }

  deletePopularPost(id: number): Observable<any>{
    return this._http.delete(`${this.apiURL}/${id}`)
  }
}
