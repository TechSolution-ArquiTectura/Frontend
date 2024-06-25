import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { PersonService } from 'src/app/core/services/auth/user/person.service';
import { User } from 'src/app/core/models/users.model';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { ActivatedRoute } from '@angular/router';
import {NgIf} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDialogActions} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatFormField,
    MatIcon,
    MatCheckbox,
    MatDialogActions,
    MatInput,
    MatError,
    MatLabel,
    MatIconButton
  ],
  standalone: true
})
export class LoginComponent {
  empLoginForm: FormGroup;

  hide = true;
  checked = true;
  searchQuery = '';
  showError = false;
  user!: User;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _empService: CinephileProfileService,
    private personService: PersonService,
    private cineclubService: CineclubService,
    private route: ActivatedRoute
  ) {
    this.empLoginForm = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    if (this.empLoginForm.valid) {
      this._empService.signInPerson(this.empLoginForm.value).subscribe({
        next: (result) => {
          if (true) {
            localStorage.setItem('userId', result.id);
            console.log('User ID: ', result.id);
            localStorage.setItem('logged', 'true');
            console.log("You're logged in!. Logged was set to true");
            this.personService
              .getPersonById(result.id)
              .subscribe((data: any) => {
                if (data.typeUser.name == 'BUSINESS') {
                  localStorage.setItem('typeUser', 'business');
                  console.log(
                    "You're registered as a business!. TypeUser was set to business"
                  );
                  this.cineclubService
                    .getCineclubByUserId(result.id)
                    .subscribe((cineclub: any) => {
                      localStorage.setItem('businessId', cineclub.id);
                      console.log('Your business ID is: ', cineclub.id);
                    });
                } else {
                  localStorage.setItem('typeUser', 'cinephile');
                  console.log(
                    "You're registered as a cinephile!. TypeUser was set to cinephile"
                  );
                }
              });

            // Obtén el returnUrl de los queryParams
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; // Si no hay returnUrl, redirige al home

            setTimeout(() => {
              this.router.navigateByUrl(returnUrl); // Redirige al usuario de vuelta a la URL guardada
            }, 2000);
          } else {
            this.showError = true; // Muestra un mensaje de error si no se recibe un token
          }
        },
      });
    }
  }
}
