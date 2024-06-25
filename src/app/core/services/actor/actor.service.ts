import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Actor } from '../../models/actor.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = environment.apiUrl;

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