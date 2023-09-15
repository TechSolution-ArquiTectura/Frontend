import { Component, OnInit } from '@angular/core';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';

@Component({
  selector: 'app-cineclubs-promotions',
  templateUrl: './cineclubs-promotions.component.html',
  styleUrls: ['./cineclubs-promotions.component.scss'],
})
export class CineclubsPromotionsComponent implements OnInit {
  promotions: Promotion[] = [];
  constructor(private promotionsService: PromotionsService) {}

  ngOnInit(): void {
    this.promotionsService.getPromotionsByBusinessId(1).subscribe((data) => {
      this.promotions = data;
    });
  }
}
