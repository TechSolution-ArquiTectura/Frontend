import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Business } from 'src/app/core/models/users.model';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCardActions} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-cineclub',
  templateUrl: './edit-cineclub.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatCardActions,
    MatInput,
    MatDialogClose,
    MatError,
    MatLabel,
    MatButton,
    NgIf
  ],
  styleUrls: ['./edit-cineclub.component.scss']
})
export class EditCineclubComponent {
  idPost: any;
  cineclub!: Business;
  cineclubForm!: FormGroup;
  subscription!: Subscription;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private cineclubService: CineclubService
  ){
    this.idPost = JSON.parse(localStorage.getItem("businessId") || '{}');
    this.cineclubForm = this._fb.group(
      {
        phone: new FormControl('', [Validators.required, Validators.maxLength(9),]),
        logoSrc: new FormControl('', [Validators.required, Validators.maxLength(100),]),
        bannerSrc: new FormControl('', [Validators.required, Validators.maxLength(100),]),
        description: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        address: new FormControl('', [Validators.required, Validators.maxLength(150),]),
      }
    );
    this.getCineclubById();
  }

  ngOnInit(): void {
    this.getCineclubById();
  }

  getCineclubById(){
    this.cineclubService.getCineclubById(this.idPost).subscribe({
      next: (res) => {
        this.cineclub = res;
        if (res.phone == null) {
          res.phone = '';
        }
        if (res.logoSrc == null) {
          res.logoSrc = '';
        }
        if (res.bannerSrc == null) {
          res.bannerSrc = '';
        }
        if (res.description == null) {
          res.description = '';
        }
        if (res.address == null) {
          res.address = '';
        }
        this.cineclubForm.setValue({phone: res.phone, logoSrc: res.logoSrc, bannerSrc: res.bannerSrc, description: res.description, address: res.address});
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  save() {
    if (this.cineclubForm.valid) {
      const formValue = { ...this.cineclubForm.value };
      this.cineclub.phone = formValue.phone;
      this.cineclub.logoSrc =  formValue.logoSrc;
      this.cineclub.bannerSrc = formValue.bannerSrc;
      this.cineclub.description = formValue.description;
      this.cineclub.address = formValue.address;

      this.cineclubService.updateCineclub(this.cineclub.id as number, this.cineclub).subscribe({
        next: (_cineclub: any) => {
          this.getCineclubById();
          alert('Perfil de cineclub editado');
        },
        error: (error: any) => {
          console.error(error);
        }
      })
    }

    this.goToProfileCineclub();
  }

  goToProfileCineclub() {
      this.router.navigate(['dashboard/perfil-cineclub']);
  }
}
