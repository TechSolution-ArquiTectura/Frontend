import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../components/shared/header/header.component";
/* const userResult = localStorage.getItem('userResult'); */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor() {
/*     if (userResult !== null) {
      const parsedResult = JSON.parse(userResult);
      // Utilizar el resultado para mostrar el perfil del usuario u otras operaciones
      console.log(parsedResult);
    } */
  }



}
