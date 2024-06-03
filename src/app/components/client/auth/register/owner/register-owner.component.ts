import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Gender, User, Business } from 'src/app/core/models/users.model';
import { BusinessType } from 'src/app/core/models/cineclub.model';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Router } from '@angular/router';

const phonePattern = /^[0-9]{9}$/;
const RUCPattern = /^[0-9]{11}$/;

@Component({
  selector: 'auth-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss']
})
export class RegisterOwnerComponent implements OnInit {

  hide = true;
  genders: Gender[] = [];
  cineclubs: BusinessType[] = [];


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

  firstFormGroup = this._formBuilder.group({
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
  });

  secondFormGroup = this._formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    social_reason: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    RUC: new FormControl('', [
      Validators.required,
      Validators.pattern(RUCPattern),
    ]),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    BusinessType_id: new FormControl('', Validators.required),
  },);

  fourthFormGroup = this._formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
  { validator: this.passwordMatchValidator }
  );

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private _empService: CinephileProfileService,
    breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

  ngOnInit(){
    this.getUserGender();
    this.getBusinessTypeList();
  }

  onFormSubmit(){
    console.log("Hola")

    console.log("first form", this.firstFormGroup.valid);
    console.log("second form", this.secondFormGroup.valid);
    console.log("fourth form", this.fourthFormGroup.valid);

    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.fourthFormGroup.valid ){
      const genderName = this.firstFormGroup.get('Gender_id')?.value as string;
      const selectedGender = this.genders.find(gender => gender.name === genderName);

      const formDataPerson: User = {
        name: this.firstFormGroup.get('first_name')?.value as string,
        lastname: this.firstFormGroup.get('last_name')?.value as string,
        email: this.fourthFormGroup.get('email')?.value,
        phoneNumber: this.firstFormGroup.get('phone')?.value as string,
        birthdate: this.firstFormGroup.get('birthdate')?.value as string,
        password: this.fourthFormGroup.get('password')?.value,
        gender: ['FEMALE'],
        typeUser: ['BUSINESS']
      };

      console.log(formDataPerson);
      this._empService.signUpPerson(formDataPerson).subscribe({
        next: (addedPerson:any) =>{
              const formDataBusiness: Business = {
                name: this.secondFormGroup.get('name')?.value as string,
                socialReason: this.secondFormGroup.get('social_reason')?.value as string,
                ruc: this.secondFormGroup.get('RUC')?.value as string,
                description: this.secondFormGroup.get('description')?.value as string,
                address: this.secondFormGroup.get('address')?.value as string,
                user: {
                  id: addedPerson.id,
                },
                businessTypes: [{
                  id: this.secondFormGroup.get('BusinessType_id')?.value as unknown as number,
                }]
              };

              this._empService.addBusiness(formDataBusiness) .subscribe({
                next: (addedBusiness: any) => {
                  console.log(addedBusiness)
                  alert('Account successfully created');
                  this.router.navigate(['/']);
                },
                error: (error: any) => {
                  console.error(error);
                }
              })
            }
        })
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

  getBusinessTypeList(){
    this._empService.getBusinessTypeList().subscribe({
      next: (val:any) =>{
        this.cineclubs = val
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
  }
}
