import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  id: string | null = '';
  openMenu: boolean = false;
  _logged: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.navigate(['/dashboard/cineclubs']);
    const user = JSON.parse(localStorage.getItem('userResult') || '{}');
    this.id = user?.id;
    
    if (localStorage.getItem('logged') == null) {
      localStorage.setItem('logged', 'false')
    }
    this._logged = this.isLogged();
  }

  isLogged() {
    if (JSON.parse(localStorage.getItem('logged') || '{}') == true) {
      return true;
    } else {
      return false;
    }
  }

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
    this._logged = this.isLogged();
  }

  goToProfile() {
    if (JSON.parse(localStorage.getItem('cineclub') || '{}') == true) {
      this.router.navigate(['dashboard/perfil-cineclub']);
    }
    else {
      this.router.navigate(['dashboard/perfil']);
    }
  }

  goToRegister() {
    this.router.navigate(['user-election']);
  }

  goToSignIn() {
    this.router.navigate(['authPage']);
  }

  signOut() {
    console.log('signOut');
    this.router.navigate(['dashboard']);
    localStorage.clear();
  }
}
