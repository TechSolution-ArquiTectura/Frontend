import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessType } from '../../models/cineclub.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypesService {
  private apiUrl = `${environment.apiUrl}/businessTypes`;

  public businessTypesList:BusinessType[]=[];

  constructor(private http: HttpClient) {
    this.getBusinessTypes().subscribe((businessTypes) => {
      this.businessTypesList = businessTypes;
    } );
  }
  public getBusinessTypes(): Observable<BusinessType[]> {
    return this.http.get<BusinessType[]>(this.apiUrl);
  }

  public getBusinessTypeById(id:number){
    //return this.businessTypesList.find((businessType)=>businessType.id==id)?.name;
    return this.http.get<BusinessType>(`${this.apiUrl}/${id}`);
  }

  public getBusinessTypesNamesOfCineclubs(ids:number[]): String[]{

    let businessTypesNamesOfCineclubs:String[]=[];

    ids.forEach((id)=>{
      businessTypesNamesOfCineclubs.push(this.businessTypesList.find((businessType)=>businessType.id==id)?.name!.toLocaleLowerCase()!);
    });
    return businessTypesNamesOfCineclubs;
  }

}



