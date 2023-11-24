import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isLogged, getTypeUser, getUserId } from 'src/app/util';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  imgProfile: string = '';
  openMenu: boolean = false;
  _logged: boolean = false;
  typeUser: string = '';

  constructor(
    private router: Router,
    private personService: PersonService,
    private businessService: CineclubService
  ) {}

  ngOnInit(): void {
    this.typeUser = getTypeUser();
    this._logged = isLogged();

    if (this._logged) {
      if (this.typeUser == 'cinephile') {
        this.personService.getPersonById(getUserId()).subscribe((data) => {
          this.imgProfile = data.imageSrc ?? '';
        });
      } else {
        this.businessService
          .getCineclubByUserId(getUserId())
          .subscribe((data) => {
            this.imgProfile = data.bannerSrc ?? '';
          });
      }
    }
  }

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
    this._logged = isLogged();
  }

  goToProfile() {
    if (this.typeUser == 'business') {
      this.router.navigate(['dashboard/perfil-cineclub']);
    } else {
      this.router.navigate(['dashboard/perfil']);
    }
  }
  goToPromotions() {
    this.router.navigate(['dashboard/promociones']);
  }

  goToRegister() {
    this.router.navigate(['user-election']);
  }

  goToSignIn() {
    this.router.navigate(['authPage']);
  }

  signOut() {
    console.log('signOut');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
