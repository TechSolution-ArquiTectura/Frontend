import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    FormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDialogTitle,
    MatInput,
    MatButton,
    MatDialogClose,
    MatDialogActions
  ],
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dataEntrante: any,
    private profileService: CinephileProfileService // Inyecta tu servicio aquí
  ) {}

  saveChanges(): void {
    this.profileService.updateProfile(this.dataEntrante).subscribe(response => {
      // Puedes manejar la respuesta del backend aquí si es necesario
      this.dialogRef.close(this.dataEntrante);
    });
  }
}
