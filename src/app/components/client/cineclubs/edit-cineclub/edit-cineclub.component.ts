import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Business } from 'src/app/core/models/user-profile.model';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';

@Component({
  selector: 'app-edit-cineclub',
  templateUrl: './edit-cineclub.component.html',
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
    this.idPost = JSON.parse(localStorage.getItem("cineclubId") || '{}');
    this.cineclubForm = this._fb.group(
      {
        bannerSrc: new FormControl('', [Validators.required, Validators.maxLength(100),]),
        description: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        address: new FormControl('', [Validators.required, Validators.maxLength(150),]),
      }
    );
    this.getCineclubById();
  }

  ngOnInit(): void {
    
  }

  getCineclubById(){
    this.cineclubService.getCineclubById(this.idPost).subscribe({
      next: (res) => {
        this.cineclub = res;
        if (res.bannerSrc == null) {
          res.bannerSrc = '';
        }
        if (res.description == null) {
          res.description = '';
        }
        if (res.address == null) {
          res.address = '';
        }
        this.cineclubForm.setValue({bannerSrc: res.bannerSrc, description: res.description, address: res.address});
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  save() {
    if (this.cineclubForm.valid) {
      const formValue = { ...this.cineclubForm.value };
      this.cineclub.bannerSrc = formValue.bannerSrc;
      this.cineclub.description = formValue.description;
      this.cineclub.address = formValue.address;
      
      this.cineclubService.updateCineclub(this.cineclub.id, this.cineclub).subscribe({
        next: (_cineclub: any) => {
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
