import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { DeletePromotionDialogComponent } from '../delete-promotion-dialog/delete-promotion-dialog.component';
import { NewPromotionDialogComponent } from '../new-promotion-dialog/new-promotion-dialog.component';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
  imports: [
    MatIcon,
    NgIf
  ],
  standalone: true
})
export class PromotionCardComponent implements OnInit {
  @Input() promotion!: Promotion;
  @Input() typeUser!: string;
  isDeletePromotion: boolean = false;
  openMenu: boolean = false;

  constructor(
    private promotionsService: PromotionsService,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  toggleMenu(isHovered: boolean) {
    this.openMenu = isHovered;
  }
  closeMenu() {
    this.openMenu = false;
  }

  openEditDialog(e: Event) {
    e.stopPropagation();
    this.closeMenu();
    const dialogRef = this._matDialog.open(NewPromotionDialogComponent, {
      width: '650px',
      data: {
        promotion: this.promotion,
      },
    });
  }

  openDeleteDialog(e: Event) {
    e.stopPropagation();
    this.closeMenu();
    const dialogRef = this._matDialog.open(DeletePromotionDialogComponent, {
      width: '450px',
      data: {
        isDeletePromotion: this.deletePromotion,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.isDeletePromotion) {
        this.deletePromotion();
      }
    });
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
