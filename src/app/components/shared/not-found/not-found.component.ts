import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  @Input() message: string;

  constructor() {
    this.message = '';
  }
}
