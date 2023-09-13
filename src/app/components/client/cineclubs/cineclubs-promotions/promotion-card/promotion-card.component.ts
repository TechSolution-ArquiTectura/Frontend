import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
})
export class PromotionCardComponent implements OnInit {
  typeUser: string = 'business';
  openMenu: boolean = false;

  ngOnInit(): void {
  }

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
  }
  closeMenu() {
    this.openMenu = false;
  }

  openEditDialog() {
    this.closeMenu();
    console.log('Editando promoción');
  }

  openDeleteDialog() {
    this.closeMenu();
    console.log('Eliminando promoción');
  }
}
