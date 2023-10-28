import { Component, OnInit } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Business } from 'src/app/core/models/user-profile.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/core/services/review/review.service';
import { Review, ReviewCineclub } from 'src/app/core/models/review.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cineclub-cineclub-profile',
  templateUrl: './cineclub-profile.component.html',
  styleUrls: ['./cineclub-profile.component.scss']
})
export class CineclubProfileComponent implements OnInit  {
  idPost: any;
  cineclub!: Business;
  reviewForm!: FormGroup;
  p:number=1;
  public userReviews:Review[]=[];
  subscription!: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _empServiceMovie: FilmsProfileService,
    private reviewService: ReviewService,
    private route : ActivatedRoute,
  ){
    this.idPost = this.route.snapshot.paramMap.get('id');
    this.reviewForm = this._fb.group(
      {
        comment: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        rating: ['', Validators.required]
      }
    );
    this.getAllReviews();
  }

  reviewCineclub: ReviewCineclub = {
    id: 0,
    comment: '',
    rating: 0,
    user: {
      id: 0
    },
    business: {
      id: 0
    }
  }

  ngOnInit(): void {
    this.getCineclubById();
    this.subscription = this.reviewService.refresh$.subscribe(() => {
      this.getAllReviews();
    })
  }

  getCineclubById(){
    this._empServiceMovie.getCineclubById(this.idPost).subscribe({
      next: (res) => {
        this.cineclub = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  saveReview() {
    if (this.reviewForm.valid) {
      const formValue = { ...this.reviewForm.value };

      this.reviewCineclub.comment = formValue.comment;
      this.reviewCineclub.rating = formValue.rating;
      this.reviewCineclub.user.id = JSON.parse(localStorage.getItem("id") || '{}');
      this.reviewCineclub.business.id = this.idPost;
      console.log(this.reviewCineclub.user.id);
    }

    this.reviewService.postReview(this.reviewCineclub).subscribe({
      next: (addedReview: any) => {
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  getAllReviews() {
    this.reviewService.getReviewsByBusinessId(this.idPost)
      .subscribe((data: any) => {
        this.userReviews = data;
        this.userReviews.reverse();
      }
      );
  }
}
