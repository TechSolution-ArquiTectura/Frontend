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
  TYPE_USER: string = 'client';
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
        // this.updatePromotionRows();
      });
    }
  }

  openNewPromotion() {
    const dialogRef = this._matDialog.open(NewPromotionDialogComponent, {
      width: '650px',
      data: {},
    });
  }

  openPromotion(promotion: Promotion) {
    this.router.navigate(['dashboard/payment'], { state: { promotion } });
  }

  /*
  currentIndex = 0;

  prevPage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePromotionRows();
    }
  }

  nextPage() {
    if (this.currentIndex < Math.ceil(this.promotions.length / 4) - 1) {
      this.currentIndex++;
      this.updatePromotionRows();
    }
  }

  updatePromotionRows() {
    const startIdx = this.currentIndex * 4;
    const endIdx = startIdx + 4;
    this.promotionRows = this.chunkArray(
      this.promotions.slice(startIdx, endIdx),
      2
    );
  }

  chunkArray(array: Promotion[], size: number): Promotion[][] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  navigateToPromotionDetail(promotionId: number) {
    // Navegar a la ruta de detalle de la promoción con el ID
    this.router.navigate(['promotions/detail', promotionId]);
  }
  */
}
