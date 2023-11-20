import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isLogged, getTypeUser } from 'src/app/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  id: string | null = '';
  openMenu: boolean = false;
  _logged: boolean = false;
  typeUser: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.navigate(['/dashboard/cineclubs']);
    const user = JSON.parse(localStorage.getItem('userResult') ?? '{}');
    this.id = user?.id;

    if (localStorage.getItem('logged') == null) {
      localStorage.setItem('logged', 'false')
    }
    this._logged = isLogged();
    this.typeUser = getTypeUser();
  }

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
    this._logged = isLogged();
  }

  goToProfile() {
    if (localStorage.getItem('typeUser') == 'business') {
      this.router.navigate(['dashboard/perfil-cineclub']);
    }
    else {
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
