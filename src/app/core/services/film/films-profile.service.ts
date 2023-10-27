import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  private apiURL="http://localhost:8080/api/TuCine/v1"

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{
    return this._http.post('https://backend-tucine-production.up.railway.app/api/TuCine/v1/films',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}`,data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/films');
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}`); 
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/Film/${id}`) //Falta implementar
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}/showtimes`);
  }

  getBusinessById(id: number): Observable<any> {
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes/${id}`);
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses');
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/businessTypes');
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/showtimes/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(`https://backend-tucine-production.up.railway.app/api/TuCine/v1/films/${id}/actors`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>('https://backend-tucine-production.up.railway.app/api/TuCine/v1/actors');
  }

  getCineclubById(id: number): Observable<any>{
    return this._http.get(`${this.apiURL}/businesses/${id}`);
  }

}
