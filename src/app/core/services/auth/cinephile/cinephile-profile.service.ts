import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/users.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: User): Observable<any>{
    return this._http.post(`${this.apiUrl}/persons`,data);
  }

  getPersonList(): Observable<any>{
    return this._http.get(`${this.apiUrl}/users`);
  }

  getPersonById(id:any): Observable<any>{
    return this._http.get(`${this.apiUrl}/users/${id}`);
  }

  signUpPerson(data: User): Observable<any>{
    return this._http.post(`${this.apiUrl}/users/auth/sign-up`,data);
  }

  signInPerson(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}/users/auth/sign-in`,data);
  }

  getUserProfileByToken(token: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': token // Agrega el token en el encabezado de autorización
    });

    return this._http.get(`${this.apiUrl}/users/profile`, { headers });
  }

  //Payment Method
  postPaymentMethod(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}/paymentMethods`,data);
  }

  //Gender
  getUserGender(): Observable<any>{
    return this._http.get(`${this.apiUrl}/genders`);
  }

  //Business Type
  getBusinessTypeList(): Observable<any>{
    return this._http.get(`${this.apiUrl}/businessTypes`);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post( `${this.apiUrl}/businesses`,data);
  }

  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}/customers`, data);
  }
  getCustomerList(): Observable<any>{
    return this._http.get(`${this.apiUrl}/customers`);
  }

  //Owner

  addOwner(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}/owners`,data);
  }

  updateProfile(data: any): Observable<any> {
    const url = `${this.apiUrl}/persons/${data.id}`; // Asume que la URL es correcta
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
