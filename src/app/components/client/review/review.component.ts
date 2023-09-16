import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  review!: FormGroup;

  constructor(private _fb: FormBuilder, private dialog: MatDialog) {
    this.review = this._fb.group(
      {
        userId: this.getUserId(),
        comment: new FormControl('', [Validators.required, Validators.maxLength(250),]),
        rating: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  getUserId() {

  }

  //TODO: Falta implementar
  saveReview() {

  }

  openDialogError() {
    this.dialog.open(DialogErrorComponent);
  }
}