import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Showtime } from 'src/app/core/models/showtime.model';
import { ShowtimeService } from 'src/app/core/services/showtime/showtime.service';
import { P } from '@angular/cdk/keycodes';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { User } from 'src/app/core/models/users.model';

@Component({
  selector: 'film-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.scss']
})
export class BookingStepperComponent implements OnInit {

  showtimeId: number | undefined;
  userId: number | undefined;
  user: User | undefined;

  @ViewChild(MatStepper)
  stepper!: MatStepper;

  showtime: Showtime | undefined;

  constructor(
    private _showtimeService: ShowtimeService,
    private _personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.getShowtimebyId(params['showtimeId']);
    this.getPersonById(this.userId? this.userId : 0);
    });
  }

  
  getShowtimebyId(id: number){ 
    this._showtimeService.getShowtimebyId(id).subscribe((res: any) => {
      this.showtime = res;
      //console.log(this.showtime);
    });
  }

  getPersonById(id: number){
    this._personService.getPersonById(id).subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
    });
  }

  goToRegister() {
    this.router.navigate(['authPage/register/:cinephile']);
  }

  goToSignIn() {
    this.router.navigate(['authPage']);
  }
}
