import {Component, Input, OnInit} from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { Group } from 'src/app/core/models/group.model';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import {Review} from "../../../core/models/review.models";
import {Gender, User} from "../../../core/models/users.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit{
  @Input() dataEntrante:any;
  @Input() groups: any;

  cinemas: [] = [];
  user: User = {
    id: 0,
    name: '',
    email: '',
    lastname: '',
    birthdate: '',
    imageSrc: '',
    phoneNumber: '',
  }
  @Input()
      public cinephile:Cinephile[]=[];

      constructor(public dialog: MatDialog, private _userService: CinephileProfileService) {}

      openEditModal(): void {
        const dialogRef = this.dialog.open(EditProfileModalComponent, {
          width: '80%',  // Ajusta al 80% del ancho de la pantalla
          height: '70%', // Ajusta al 70% del alto de la pantalla
          data: this.dataEntrante
        });


        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.dataEntrante = result;
            // Aquí puedes llamar a un servicio para guardar los cambios en el backend
          }
        });
      }
  ngOnInit(): void {
    this.user.id = JSON.parse(localStorage.getItem("userId") || '{}');
    this._userService.getPersonById(this.user.id).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.dataEntrante = this.user;
    });
  }

}

