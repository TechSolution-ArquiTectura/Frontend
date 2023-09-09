import { Component, OnInit } from '@angular/core';
import { PromotionsService } from 'src/app/core/services/promotions/promotions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  promotions: Promotion[] = [];
  promotionRows: Promotion[][] = []; // Agregamos esta propiedad

  constructor(private promotionsService: PromotionsService, private router: Router) {}

  ngOnInit() {
    this.promotionsService.getPromotions().subscribe((data) => {
      this.promotions = data;
      this.updatePromotionRows(); // Llamamos a esta función para inicializar la cuadrícula
    });
  }

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
    this.promotionRows = this.chunkArray(this.promotions.slice(startIdx, endIdx), 2);
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
}

interface Promotion {
  id: number;
  name: string;
  description: string;
  initDate: string;
  endDate: string;
  business: {
    name: string;
  };
}
