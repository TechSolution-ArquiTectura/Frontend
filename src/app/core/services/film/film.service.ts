import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Movie } from 'src/app/core/models/film.model';
import { Film } from '../../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public FilmList:Film[]=[]

  private apiURL= "http://localhost:8080/api/TuCine/v1/films";

  constructor(private http:HttpClient) {
    this.getFilms().subscribe((films)=>{
      this.FilmList=films;
      });
  }

  public getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
  }

  public searchFilms(title: string, movies: Film[],filters?:string[]): Film[] {
    if(filters!=undefined){
    }

    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }

}
