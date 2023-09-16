import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Promotion } from 'src/app/core/models/promotion';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';

@Component({
  selector: 'app-promotions-detail',
  templateUrl: './promotions-detail.component.html',
  styleUrls: ['./promotions-detail.component.scss'],
})
export class PromotionsDetailComponent implements OnInit {
  promotion: Promotion | undefined;

  constructor(
    private route: ActivatedRoute,
    private promotionsService: PromotionsService
  ) {}

  ngOnInit() {
    // Obtén el ID de la promoción desde la URL
    const promotionId = this.route.snapshot.params['id'];

    // Llama al servicio para obtener los detalles de la promoción por su ID
    this.promotionsService.getPromotionById(promotionId).subscribe((data) => {
      this.promotion = data;
    });
  }
}
