import { Component,  OnInit } from '@angular/core';
import { Business } from 'src/app/core/models/cineclub.model';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { BusinessType } from 'src/app/core/models/cineclub.model';
import { BusinessTypesService } from 'src/app/core/services/cineclubs/business-types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cineClubs: Business[] = [];
  cineClubCopy: Business[] = [];
  searchQuery = '';


  constructor(private cineClubService: CineclubService, private businessTypeService: BusinessTypesService) {}

  ngOnInit(): void {

    this.cineClubService.getCineclubs().subscribe((response) => {
      this.cineClubs = response;

      this.cineClubs.map(cineClub => {
        this.businessTypeService.getBusinessTypeById(cineClub.businessTypes).subscribe(res => {
          cineClub.businessTypes = res;
        })
      })

      this.cineClubCopy = response.slice();

      console.log(this.cineClubs)
    });
  }

  searchCineClubs(): void {
    console.log(this.searchQuery)

      this.cineClubs = this.cineClubService.searchCineclubs(this.searchQuery, this.cineClubCopy);
    console.log(this.cineClubs)
  }
}
