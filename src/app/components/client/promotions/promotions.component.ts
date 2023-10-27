import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { NewPromotionDialogComponent } from './new-promotion-dialog/new-promotion-dialog.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  BUSINESS_ID: number = 3;
  TYPE_USER: string = 'business';
  promotions: Promotion[] = [];

  constructor(
    private promotionsService: PromotionsService,
    private _matDialog: MatDialog,
    private router: Router
  )
  {}

  ngOnInit() {
    if (this.TYPE_USER == 'business') {
      this.promotionsService
        .getPromotionsByBusinessId(this.BUSINESS_ID)
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
