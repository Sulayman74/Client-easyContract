import { Component, Input, OnInit } from '@angular/core';

import { EditSocietyComponent } from 'src/app/modals/edit-society/edit-society.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.scss']
})
export class ProfilEntrepriseComponent implements OnInit {



  @Input() profilEntreprise!: any

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {


  }

  onEdit() {
    let dialogRef = this._dialog.open(EditSocietyComponent, {
      width: "50%",
      height: "80%",
      data: this.profilEntreprise
    })
    dialogRef.afterClosed().subscribe((profil: any) => {
      this.profilEntreprise = profil.profil.newDatas
      console.log(this.profilEntreprise);
    })

  }






}
