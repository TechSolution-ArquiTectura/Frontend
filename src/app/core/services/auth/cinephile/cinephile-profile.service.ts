import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  private apiURL="https://tucine-api.onrender.com/api/TuCine/v1";

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: User): Observable<any>{
    return this._http.post(`${this.apiURL}/persons`,data);
  }

  getPersonList(): Observable<any>{
    return this._http.get(`${this.apiURL}/users`);
  }

  signUpPerson(data: User): Observable<any>{
    return this._http.post(`${this.apiURL}/users/auth/sign-up`,data);
  }

  signInPerson(data: any): Observable<any>{
    return this._http.post(`${this.apiURL}/users/auth/sign-in`,data);
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
    return this._http.post(`${this.apiURL}/customers`, data);
  }
  getCustomerList(): Observable<any>{
    return this._http.get(`${this.apiURL}/customers`);
  }

  //Owner

  addOwner(data: any): Observable<any>{
    return this._http.post(`${this.apiURL}/owners`,data);
  }

  updateProfile(data: any): Observable<any> {
    const url = `${this.apiURL}/persons/${data.id}`; // Asume que la URL es correcta
    return this._http.put(url, data);
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
