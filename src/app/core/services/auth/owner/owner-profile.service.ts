import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  addOwner(data: any): Observable<any>{
    return this._http.post(this.apiUrl+'/owner',data);
  }

  updateOwner(id: number, data: any): Observable<any>{
    return this._http.put(this.apiUrl+`/owner${id}`,data);
  }

  getOwnerList(): Observable<any>{
    return this._http.get(this.apiUrl+'/owner');
  }
}
