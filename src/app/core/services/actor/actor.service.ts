import { Injectable } from '@angular/core';
import { Actor } from '../../models/actor.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'https://tucine-api.onrender.com/api/TuCine/v1';

  constructor(private http: HttpClient) { }

  postActor(data: Actor): Observable<any>{
    return this.http.post(this.apiUrl+'/actors', data);
  }

  postActorCineclub(filmId: number, actorId: number) {
    return this.http.post<any>(`${this.apiUrl}/films/${filmId}/actors/${actorId}`, null);
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl+'/actors');
  }

}