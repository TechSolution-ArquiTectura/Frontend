import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
  selector: 'explore-near-events',
  templateUrl: './near-events.component.html',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  styleUrls: ['./near-events.component.scss']
})
export class NearEventsComponent {

}
