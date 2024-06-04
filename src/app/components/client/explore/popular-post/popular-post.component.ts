import { Component, OnInit } from '@angular/core';
import { PopularPostService } from 'src/app/core/services/explore/popular-post/popular-post.service';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'explore-popular-post',
  templateUrl: './popular-post.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardSubtitle,
    MatCardHeader,
    FlexModule,
    MatCardTitle,
    NgForOf
  ],
  styleUrls: ['./popular-post.component.scss']
})
export class PopularPostComponent implements OnInit {
  posts: Array<any> = [];
  path: Array<any> = [];

  constructor(
    private _empPopularEventNow: PopularPostService
  ){}

  ngOnInit(): void {
    this.getPopularPostList()
  }

  getPopularPostList(){
    this._empPopularEventNow.getPopularPostList().subscribe({
      next: (res) => {
        console.log(res)
        this.posts = res;
        console.log(this.posts)
        console.log("here")
/*         for (let i=0; i< this.posts.length; i++){
          console.log(this.posts[i].background)
          this.path.push(this.posts[i].background)
        } */

      },
      error: (err) => {
        console.log(err)
      }
    })


  }
}
