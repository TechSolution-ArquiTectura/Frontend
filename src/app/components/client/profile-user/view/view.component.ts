import { Component, OnInit } from '@angular/core';
import { CinephileProfileService } from '../../../../core/services/auth/cinephile/cinephile-profile.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/core/services/groups/group.service';
import { Group } from 'src/app/core/models/group.model';

const authToken = localStorage.getItem('authToken');

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit  {
  userProfile: any;
  groups!: Group;
  constructor(private userService: CinephileProfileService, private groupService: GroupService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    const authToken = localStorage.getItem('authToken')?.toString();

    //Verficar el tipo de dato de authToken
    console.log(typeof authToken);

    if (authToken != null) {
      this.userService.getUserProfileByToken(authToken).subscribe((data) => {
        this.userProfile = data;
        console.log(this.userProfile);
      });
    }

  }

}




