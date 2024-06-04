import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/core/models/cineclub.model';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatCardImage} from "@angular/material/card";
import {NgxPaginationModule} from "ngx-pagination";
import {NotFoundComponent} from "../../../shared/not-found/not-found.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-list-cineclubs',
  templateUrl: './list-cineclubs.component.html',
  standalone: true,
  imports: [
    NgForOf,
    MatCardImage,
    NgxPaginationModule,
    NotFoundComponent,
    RouterLink,
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./list-cineclubs.component.scss']
})
export class ListCineclubsComponent {
  pageChanged($event: number) {
    throw new Error('Method not implemented.');
    }
      p:number=1;

      @Input() dataEntrante:any;
      public image!: string;
      @Input()
      public cineClubs:Business[]=[];

      constructor(){}

}
