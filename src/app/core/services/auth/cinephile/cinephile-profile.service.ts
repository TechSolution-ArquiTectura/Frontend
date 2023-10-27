import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  private apiURL="http://localhost:8080/api/TuCine/v1"

  constructor(private _http: HttpClient) {}

  //General
  signUpPerson(data: User): Observable<any>{
    return this._http.post(`${this.apiURL}/users/auth/sign-up`,data);
  }

  signInPerson(data: any): Observable<any>{
    return this._http.post(`${this.apiURL}/users/auth/sign-in`,data);
  }

  getPersonList(): Observable<any>{
    return this._http.get( `${this.apiURL}/users`);
  }

  getUserProfileByToken(token: string): Observable<any>{ 
    const headers = new HttpHeaders({
      'Authorization': token // Agrega el token en el encabezado de autorización
    });

    return this._http.get(`${this.apiURL}/users/profile`, { headers });
  }


  //Gender
  getUserGender(): Observable<any>{
    return this._http.get(`${this.apiURL}/genders`);
  }

  //Business Type
  getBusinessTypeList(): Observable<any>{
    return this._http.get(`${this.apiURL}/businessTypes`);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post( `${this.apiURL}/businesses`,data);
  }





  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/customers',data);
  }
  getCustomerList(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/customers');
  }

  addOwner(data: any): Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/owners',data);
  }

}
