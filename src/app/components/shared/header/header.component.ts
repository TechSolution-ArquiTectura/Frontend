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

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    //this.router.navigate(['/dashboard/cineclubs']);
    const user = JSON.parse(localStorage.getItem('userResult') || '{}');
    this.id = user?.id;
  }

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
  }

  goToProfile() {
    this.router.navigate(['dashboard/perfil']);
  }

  signOut() {
    console.log('signOut');
    this.router.navigate(['dashboard']);
  }
}
