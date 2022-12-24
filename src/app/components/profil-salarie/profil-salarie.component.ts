import { Component, Input, OnInit } from '@angular/core';

import { EditModalComponent } from 'src/app/modals/edit-modal/edit-modal.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil-salarie',
  templateUrl: './profil-salarie.component.html',
  styleUrls: ['./profil-salarie.component.scss']
})
export class ProfilSalarieComponent implements OnInit {

  profil !: FormGroup<any>

  @Input() profilSalarie!: any

  constructor(
    private _salarieService: UsersService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log("je suis dans le profil salarie", this.profilSalarie);
  }
  onEdit() {
    this._dialog.open(EditModalComponent, {
      width: "50%",
      height: "80%",
      data: this.profilSalarie
    })
  }

}