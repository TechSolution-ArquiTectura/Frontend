import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerProfileService {

  private apiURL="https://backend-production-d5ba.up.railway.app/api/TuCine/v1"

  constructor(private _http: HttpClient) {}

  addOwner(data: any): Observable<any>{
    return this._http.post(this.apiURL+'/owner',data);
  }

  updateOwner(id: number, data: any): Observable<any>{
    return this._http.put(this.apiURL+`/owner${id}`,data);
  }

  getOwnerList(): Observable<any>{
    return this._http.get(this.apiURL+'/owner');
  }
}
