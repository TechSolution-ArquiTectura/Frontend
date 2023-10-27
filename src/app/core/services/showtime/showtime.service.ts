import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  constructor(private _http: HttpClient) { }

  getAllShowtimesByBusinessId(id: number): Observable<any>{
    return this._http.get(`https://tucine-api.onrender.com/api/TuCine/v1/businesses/${id}/showtimes`);
  }

}
