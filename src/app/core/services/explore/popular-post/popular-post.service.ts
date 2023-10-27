import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularPostService {

  private apiURL="https://tucine-api.onrender.com/api/TuCine/v1/popular-post";

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
