import { Component, OnInit } from '@angular/core';
import { PopularNowService } from 'src/app/core/services/explore/popular-now/popular-now.service';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'explore-popular-now',
  templateUrl: './popular-now.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardContent,
    MatCardActions,
    FlexModule,
    MatCardImage,
    MatCardSubtitle,
    MatButton,
    MatCardTitle,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./popular-now.component.scss']
})
export class PopularNowComponent implements OnInit{

  cards: Array<any> = [];

  constructor(
    private _empPopularEventNow: PopularNowService
  ){}

  ngOnInit(): void {
    this.getPopularEventNowList()
  }
  getPopularEventNowList(){
    this._empPopularEventNow.getPopularEventNowList().subscribe({
      next: (res) => {
        //console.log(res)
        this.cards = res;
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
