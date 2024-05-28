import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from 'src/app/core/models/cineclub.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CineclubService {

  public moviesList:Business[]=[]

  private apiUrl = `${environment.apiUrl}/businesses`;

  constructor(private http: HttpClient) {
    this.getCineclubs()
   }

  public getCineclubs(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiUrl);
  }

  public getCineclubById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  public getCineclubByUserId(userId: any): Observable<Business> {
    return this.http.get<Business>(`${this.apiUrl}/user/${userId}`);
  }

  public searchCineclubs(title: string, cineclubs: Business[]): Business[] {

    return cineclubs.filter(cineclub => cineclub.name.toLowerCase().includes(title.toLowerCase()));
  }

  public updateCineclub(id: number, data: any): Observable<any>{
    return this.http.put(this.apiUrl+`/${id}`,data);
  }

  public get(url:string){
    return this.http.get(url); //Get host

  }
}
