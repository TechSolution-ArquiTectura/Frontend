import { Component } from '@angular/core';
import { PopularNowComponent } from '../popular-now/popular-now.component';
import { PopularPostComponent } from '../popular-post/popular-post.component';
import { NearEventsComponent } from '../near-events/near-events.component';
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'explore-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    NearEventsComponent,
    PopularNowComponent,
    PopularPostComponent,
    FlexModule
  ],
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
