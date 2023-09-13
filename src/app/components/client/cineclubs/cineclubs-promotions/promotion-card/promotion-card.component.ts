import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
})
export class PromotionCardComponent implements OnInit {
  @Input() promotion!: Promotion;
  @Input() typeUser!: string;
  openMenu: boolean = false;

  constructor(
    private promotionsService: PromotionsService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}
  ngOnInit(): void {}

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
    this.deletePromotion();
  }

  deletePromotion() {
    this.promotionsService
      .deletePromotionById(this.promotion.id)
      .subscribe((data) => {
        this._snackBar.open('Promoción eliminada', 'Cerrar', {
          duration: 3000,
        });
      });
  }
}
