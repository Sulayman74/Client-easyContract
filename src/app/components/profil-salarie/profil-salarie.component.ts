import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';

import { EditModalComponent } from 'src/app/modals/edit-modal/edit-modal.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-profil-salarie',
  templateUrl: './profil-salarie.component.html',
  styleUrls: ['./profil-salarie.component.scss']
})
export class ProfilSalarieComponent implements OnInit {


  @Input() profilSalarie!: Salarie

  constructor(
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }


  async onEdit() {
    const dialogRef = this._dialog.open(EditModalComponent, {
      width: "100%",
      height: "100%",
      data: this.profilSalarie
    });

    const profil = await lastValueFrom(dialogRef.afterClosed().pipe(take(1)));
    if (profil) {
      this.profilSalarie = profil.profil.newDatas
      this._snackbar.open('Profil mis à jour', "OK", { duration: 2000 })
    } else {
      this.profilSalarie = this.profilSalarie
    }
  }

  // onEdit() {
  //   let dialogRef = this._dialog.open(EditModalComponent, {
  //     width: "100%",
  //     height: "100%",
  //     data: this.profilSalarie
  //   }).afterClosed().subscribe((profil: any) => {
  //     if (profil) { this.profilSalarie = profil.profil.newDatas }
  //     else {
  //       this.profilSalarie = this.profilSalarie
  //     }
  //   })
  //   return dialogRef
  // dialogRef.afterClosed().subscribe((profil: any) => {
  //   this.profilSalarie = profil.profil.newDatas

  // })
  // }


}