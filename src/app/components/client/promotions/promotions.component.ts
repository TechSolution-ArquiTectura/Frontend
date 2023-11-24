import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { NewPromotionDialogComponent } from './new-promotion-dialog/new-promotion-dialog.component';
import { getTypeUser, getBusinessId } from 'src/app/util';

import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  businessId: number | null = getBusinessId();
  typeUser: string = getTypeUser();
  promotions: Promotion[] = [];

  constructor(
    private promotionsService: PromotionsService,
    private _matDialog: MatDialog,
    private router: Router
  )
  {}

  ngOnInit() {
    if (this.typeUser == 'business' && this.businessId != null) {
      this.promotionsService
        .getPromotionsByBusinessId(this.businessId)
        .subscribe((data) => {
          this.promotions = data;
        });
    } else {
      this.promotionsService.getPromotions().subscribe((data) => {
        this.promotions = data;
      });
    }
  }

  openNewPromotion() {
    const dialogRef = this._matDialog.open(NewPromotionDialogComponent, {
      width: '650px',
      data: {
      },
    });
  }

  openPromotion(promotion: Promotion, e: Event) {
    e.stopPropagation();
    this.router.navigate(['dashboard/payment'], { state: { promotion } });
  }
}
