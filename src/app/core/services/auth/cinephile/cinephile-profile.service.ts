import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Person } from 'src/app/core/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  private apiURL="https://tucine-api.onrender.com/api/TuCine/v1";

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: Person): Observable<any>{
    return this._http.post(`${this.apiURL}/persons`,data);
  }

  getPersonList(): Observable<any>{
    return this._http.get(`${this.apiURL}/users`);
  }

  getUserGender(): Observable<any>{
    return this._http.get(`${this.apiURL}/genders`);
  }

  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post(`${this.apiURL}/customers`, data);
  }

  getCustomerList(): Observable<any>{
    return this._http.get(`${this.apiURL}/customers`);
  }

  //Owner
  getBusinessTypeList(): Observable<any>{
    return this._http.get(`${this.apiURL}/businessTypes`);
  }

  addOwner(data: any): Observable<any>{
    return this._http.post(`${this.apiURL}/owners`,data);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post(`${this.apiURL}/businesses`,data);
  }

  validateCredentials(email: string, password: string): Observable<any>{
    return this.getPersonList().pipe(
      switchMap((userList: any[]) => {
        const user = userList.find(user => user.email === email);

        if (user && user.password === password) {
          // Las credenciales coinciden
          return of({ valid: true, user: user });
        } else {
          // Las credenciales no coinciden
          return of({ valid: false, user: null });
        }
      })
    );
  }

}
