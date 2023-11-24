import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Gender,User } from 'src/app/core/models/users.model';
import { ActivatedRoute, Router } from '@angular/router';

const phonePattern = /^[0-9]{9}$/;

@Component({
  selector: 'auth-register-cinephile',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  empUserForm: FormGroup;
  exist: boolean = false;
  hide = true;

  genders: Gender[] = [];

  person: User = {
    name: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    birthdate: '',
    gender: [],
    typeUser: ['CINEPHILE'],
  }


  constructor(
    private _fb: FormBuilder,
    private _empService: CinephileProfileService,
    private router: Router

    ) {
    this.empUserForm = this._fb.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        Gender_id: new FormControl('', Validators.required),
        birthdate: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(phonePattern),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit(){
    this.getUserGender();
  }

  onFormSubmit() {
    if (this.empUserForm.valid) {
      const formValue = { ...this.empUserForm.value };
      delete formValue.confirmPassword;
  
      this.person.name = formValue.first_name;
      this.person.lastname = formValue.last_name;
      this.person.birthdate = formValue.birthdate;
      this.person.phoneNumber = formValue.phone;
      this.person.email = formValue.email;
      this.person.password = formValue.password;
  
      const selectedGender = this.genders.find(gender => gender.name === formValue.Gender_id);
      this.person.gender = selectedGender ? [selectedGender.name] : [];
  
      this._empService.signUpPerson(this.person).subscribe({
        next: () => {
          //alert('Account successfully created');
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }

  getUserGender(){
    this._empService.getUserGender().subscribe({
      next: (val:any) =>{
        this.genders = val
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }

    return null;
  };

}
