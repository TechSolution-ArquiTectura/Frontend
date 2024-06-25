import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage,MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-user-election',
  templateUrl: './user-election.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatIconButton,
    MatCardImage,
    MatButton
  ],
  styleUrls: ['./user-election.component.scss']
})
export class UserElectionComponent {

  constructor(private router: Router) {}

  redirectToRegisterCinephile(){
    this.router.navigate(['/authPage/register/:cinephile']);
  }

  redirectToRegisterOwner(){
    this.router.navigate(['/authPage/register/:owner']);
  }

  redirectToLandingPage(){
    this.router.navigate(['/landingPage']);
  }
}
