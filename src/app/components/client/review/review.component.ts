import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  review!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.review = this._fb.group(
      {
        userId: this.getUserId(),
        businessId: this.getBusinessId(),
        comment: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        rating: ['', Validators.required]
        //created_at
        //updated_at
        //star icon	<mat-icon>star</mat-icon>
        //border star border icon	<mat-icon>star_border</mat-icon>
      }
    );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  getUserId() {

  }

  getBusinessId() {

  }

  onFormSubmit(): void {
    
  }
}
