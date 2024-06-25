import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Film } from '../../models/film.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  private apiUrl = environment.apiUrl;

  private _refresh$ = new Subject<void>();

  constructor(private _http: HttpClient) {}

  get refresh$(){
    return this._refresh$;
  }

  addMovieProfile(data: any): Observable<any>{
    return this._http.post(this.apiUrl+'/films',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(this.apiUrl+`/films/${id}`,data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get(this.apiUrl+'/films');
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(this.apiUrl+`/films/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(this.apiUrl+`/films/${id}`) //Falta implementar
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(this.apiUrl+`/films/${id}/showtimes`);
  }

  getBusinessById(id: number): Observable<any> {
    return this._http.get(this.apiUrl+`/businesses/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {
    return this._http.get(this.apiUrl+`/businessTypes/${id}`);
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>(this.apiUrl+'/businesses');
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>(this.apiUrl+'/businessTypes');
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(this.apiUrl+`/showtimes/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(this.apiUrl+`/films/${id}/actors`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>(this.apiUrl+'/actors');
  }

  getCineclubById(id: number): Observable<any>{
    return this._http.get(this.apiUrl+`/businesses/${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );;
  }

  public getFilms(): Observable<Film[]> {
    return this._http.get<Film[]>(this.apiUrl+'/films');
  }

}
