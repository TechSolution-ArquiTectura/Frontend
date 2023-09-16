import { Component, Input } from '@angular/core';
import { Promotion } from 'src/app/core/models/promotion';

@Component({
  selector: 'promotion-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() promotion!: Promotion;
}
