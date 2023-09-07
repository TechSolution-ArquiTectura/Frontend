import { Component, OnInit } from '@angular/core';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit{

  promotions: Promotion[] = [];

  constructor(private promotionsService: PromotionsService) {}

  ngOnInit() {
    this.promotionsService.getPromotions().subscribe((data) => {
      this.promotions = data;
    });
  }


}

interface Promotion {
  name: string;
  description: string;
  initDate: string;
  endDate: string;
  business: {
    name: string;
  };
}