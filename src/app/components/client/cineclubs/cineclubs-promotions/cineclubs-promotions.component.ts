import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { NewPromotionDialogComponent } from './new-promotion-dialog/new-promotion-dialog.component';

@Component({
  selector: 'app-cineclubs-promotions',
  templateUrl: './cineclubs-promotions.component.html',
  styleUrls: ['./cineclubs-promotions.component.scss'],
})
export class CineclubsPromotionsComponent implements OnInit {
  promotions: Promotion[] = [];
  constructor(
    private promotionsService: PromotionsService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.promotionsService.getPromotionsByBusinessId(1).subscribe((data) => {
      this.promotions = data;
    });
  }

  openNewPromotion() {
    const dialogRef = this._matDialog.open(NewPromotionDialogComponent, {
      width: '650px',
      data: {
      },
    });
  }
}
