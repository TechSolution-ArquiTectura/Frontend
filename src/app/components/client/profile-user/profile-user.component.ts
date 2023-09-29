import { Component, Input } from '@angular/core';
import { Cinephile } from 'src/app/core/models/cinephile.model';
import { Group } from 'src/app/core/models/group.model';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {
  @Input() dataEntrante:any;
  @Input() groups: any;

  cinemas: [] = [];

  @Input()
      public cinephile:Cinephile[]=[];

      constructor(public dialog: MatDialog) {}

      

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
  

}

