import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() dataEntrante:any;
  public image!: string;

}
