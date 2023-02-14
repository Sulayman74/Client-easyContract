import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';

import { EditSocietyComponent } from 'src/app/modals/edit-society/edit-society.component';
import { Entreprise } from 'src/app/models/entreprise';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.scss']
})
export class ProfilEntrepriseComponent implements OnInit {



  @Input() profilEntreprise!: Entreprise


  constructor(
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {


  }

  // onEdit() {
  //   let dialogRef = this._dialog.open(EditSocietyComponent, {
  //     width: "100%",
  //     height: "100%",
  //     data: this.profilEntreprise
  //   }).afterClosed().subscribe((profil: any) => {
  //     if (profil) {
  //       this.profilEntreprise = profil.profil.newDatas
  //       this._snackbar.open('Profil mis à jour', "OK", { duration: 2000 })
  //     }
  //     else {
  //       this.profilEntreprise = this.profilEntreprise
  //     }

  //   })
  //   return dialogRef
  // }


  async onEdit() {
    const dialogRef = this._dialog.open(EditSocietyComponent, {
      width: "100%",
      height: "100%",
      data: this.profilEntreprise
    });

    const profil = await lastValueFrom(dialogRef.afterClosed().pipe(take(1)));
    if (profil) {
      this.profilEntreprise = profil.profil.newDatas
      this._snackbar.open('Profil mis à jour', "OK", { duration: 2000 })
    } else {

      this.profilEntreprise = this.profilEntreprise
    }

  }




}
