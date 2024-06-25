import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  ReactiveFormsModule
} from '@angular/forms';
import {MatDialog, MatDialogClose} from '@angular/material/dialog';
import { Review } from 'src/app/core/models/review.models';
import { ReviewService } from 'src/app/core/services/review/review.service';
import {MatIcon} from "@angular/material/icon";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCardActions} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  standalone: true,
  imports: [
    MatIcon,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatCardActions,
    MatDialogClose,
    MatError,
    MatInput,
    MatButton,
    NgIf
  ],
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  reviewForm!: FormGroup;
  rating: number;
  constructor(private _fb: FormBuilder,
    private dialog: MatDialog,
    private reviewService: ReviewService) {
    this.rating = 0;
    this.reviewForm = this._fb.group(
      {
        comment: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        rating: ['', Validators.required]
      }
    );
  }

  review: Review = {
    id: 0,
    comment: '',
    rating: 0,
    user: {
      id: 0
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getUserId() {
    return 1
  }
/*
  getUser(): Person {

    user = new Person

    return
  }*/

  saveReview() {
    if (this.reviewForm.valid) {
      const formValue = { ...this.reviewForm.value };

      this.review.comment = formValue.comment;
      this.review.rating = formValue.rating;
      this.review.user.id = JSON.parse(localStorage.getItem("userId") || '{}');
      console.log(this.review.user.id);
    }

    this.reviewService.postReview(this.review).subscribe({
      next: (addedReview: any) => {
        alert('Review successfully created');
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }
}
