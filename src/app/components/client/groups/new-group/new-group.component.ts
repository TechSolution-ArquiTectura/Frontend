import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
  StepperOrientation
} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {COMMA, ENTER, P} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRow} from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';
import {AsyncPipe, NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

export interface Topic {
  name: string;
}

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  standalone: true,
  imports: [
    NgSwitch,
    AsyncPipe,
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatChipGrid,
    MatChipRow,
    MatChipInput,
    MatInput,
    MatButton,
    MatStepperNext,
    MatStepperPrevious,
    MatStepLabel,
    NgSwitchCase,
    MatLabel,
    NgForOf
  ],
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent {

  //Stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private http:GroupService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  //Chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  topics: Topic[] = [{name: 'Anime'}, {name: 'Action'}, {name: 'Adventure'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our topic
    if (value) {
      this.topics.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(topic: Topic): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  edit(topic: Topic, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove topic if it no longer has a name
    if (!value) {
      this.remove(topic);
      return;
    }

    // Edit existing topic
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics[index].name = value;
    }
  }

  submit(){

    const groups=this.http.getGroups
    const secondCtrlValue = this.secondFormGroup.get('secondCtrl')?.value as string[] | undefined;

    const data: Group = {
      id: groups.length,
      ubication: this.firstFormGroup.get('firstCtrl')?.value as string,
      topics: secondCtrlValue ?? [],
      name: this.thirdFormGroup.get('thirdCtrl')?.value as string,
      description: this.fourthFormGroup.get('fourthCtrl')?.value as string
    };


    this.http.addGroup(data);
}



}
