import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  empLoginForm: FormGroup;

  hide = true;
  checked = true;
  searchQuery = '';
  showError = false;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _empService: CinephileProfileService,

  ){

    this.empLoginForm = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      }
    )
  }

  onFormSubmit(){
    if (this.empLoginForm.valid) {

      this._empService.signInPerson(this.empLoginForm.value).subscribe({
        next: (result) => {
          if (result.token) { // Verifica si se recibe un token
            console.log('Las credenciales son correctas');
            console.log(result.user);

            // Almacena el token en el localStorage
            localStorage.setItem('authToken', result.token);

            // Redirige al usuario al panel de control (dashboard)
            this.router.navigate(['dashboard']);
          } else {
            this.showError = true; // Muestra un mensaje de error si no se recibe un token
          }
        },
      });
    }
  }
  redirectToViewProfile(){
    this.router.navigate(['/perfil']);
  }
}
