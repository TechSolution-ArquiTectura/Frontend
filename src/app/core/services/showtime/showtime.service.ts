import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Showtime } from '../../models/showtime.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {
  private apiURL= "https://tucine-api.onrender.com/api/TuCine/v1/showtimes";

  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) { }

  getAllShowtimesByBusinessId(id: number): Observable<any>{
    return this._http.get(`https://tucine-api.onrender.com/api/TuCine/v1/businesses/${id}/showtimes`);
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(`${this.apiURL}/${id}`);
  }

  postShowtime(showtime: Showtime): void {
    this._http.post<Showtime>(this.apiURL, showtime).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Hubo un problema al crear la función', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  putShowtime(showtime: Showtime, id: number): void {
    console.log(showtime);
    this._http.put<Showtime>(`${this.apiURL}/${id}`, showtime).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Hubo un problema al modificar la función', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }

  deleteShowtimeById(id: number): Observable<Showtime> {
    return this._http.delete<Showtime>(`${this.apiURL}/${id}`);
  }

}
