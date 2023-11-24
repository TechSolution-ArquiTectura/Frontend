import { Component, OnInit } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/core/models/users.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReviewService } from 'src/app/core/services/review/review.service';
import { Review, ReviewCineclub } from 'src/app/core/models/review.models';
import {Observable, Subscription} from 'rxjs';
import { isBusiness } from 'src/app/util';

@Component({
  selector: 'cineclub-cineclub-profile',
  templateUrl: './cineclub-profile.component.html',
  styleUrls: ['./cineclub-profile.component.scss'],
})
export class CineclubProfileComponent implements OnInit {
  idPost: any;
  cineclub!: Business;
  reviewForm!: FormGroup;
  subscription!: Subscription;
  isBusiness: boolean = isBusiness();
  p: number = 1;
  public userReviews: Review[] = [];

  constructor(
    private _fb: FormBuilder,
    private _empServiceMovie: FilmsProfileService,
    private reviewService: ReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.isBusiness) {
      this.idPost = JSON.parse(localStorage.getItem('businessId') ?? '{}');
    } else {
      this.idPost = this.route.snapshot.paramMap.get('id');
    }

    console.log(this.idPost)

    this.reviewForm = this._fb.group({
      comment: new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
      rating: ['', Validators.required],
    });
    this.getAllReviews();
  }

  reviewCineclub: ReviewCineclub = {
    id: 0,
    comment: '',
    rating: 0,
    user: {
      id: 0,
    },
    business: {
      id: 0,
    },
  };

  ngOnInit(): void {
    this.getCineclubById();
    this.subscription = this.reviewService.refresh$.subscribe(() => {
      this.getAllReviews();
    });
  }

  getRange(rating: number): number[] {
    const roundedRating = Math.floor(rating);
    return Array.from({ length: roundedRating }, (_, index) => index + 1);
  }

  getCineclubById() {
    this._empServiceMovie.getCineclubById(this.idPost).subscribe({
      next: (res) => {
        this.cineclub = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  saveReview() {
    if (this.reviewForm.valid) {
      const formValue = { ...this.reviewForm.value };

      this.reviewCineclub.comment = formValue.comment;
      this.reviewCineclub.rating = formValue.rating;
      this.reviewCineclub.user.id = JSON.parse(
        localStorage.getItem('userId') || '{}'
      );
      this.reviewCineclub.business.id = this.idPost;
    }

    this.reviewService.postReview(this.reviewCineclub).subscribe({
      next: (addedReview: any) => {},
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  getAllReviews() {
    this.reviewService
      .getReviewsByBusinessId(this.idPost)
      .subscribe((data: any) => {
        this.userReviews = data;
        this.userReviews.reverse();
      });
  }

  goToEditCineclub() {
    this.router.navigate(['dashboard/edit-cineclub']);
  }


  deleteReviewById(reviewId: number) {
    this.reviewService.deleteReviewById(reviewId).subscribe({
      next: (deletedReview: any) => {
        console.log('Deleted Review:', deletedReview);
        this.getAllReviews();
        alert('Review deleted successfully');
      },
      error: (error: any) => {
        console.error('Error deleting review:', error);
        alert('Could not delete review');
      },
    });
  }


}
