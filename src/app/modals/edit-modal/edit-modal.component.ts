import { FormBuilder, FormGroup } from '@angular/forms';

import { Salarie } from 'src/app/models/salarie';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  editForm !: FormGroup<any>

  salarie = new Salarie();

  constructor(
    private _salarieService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {

    this.editForm = this._fb.group({
      civilite: this.data.civilite,
      nom: this.data.nom,
      prenom: this.data.prenom,
      nom_jeune_fille: this.data.nom_jeune_fille,
      telephone: this.data.telephone,
      email: this.data.email,
      rue: this.data.rue,
      ville: this.data.ville,
      cp: this.data.cp,
      num_ss: this.data.num_ss,
      pays_naissance: this.data.pays_naissance,
      lieu_naissance: this.data.lieu_naissance,
      date_naissance: this.data.date_naissance
    })
  }

  onSubmit() {
    const formulaire = this.editForm.value
    this.salarie = Object.assign(this.salarie, formulaire)


    this._salarieService.updateSalarie(formulaire).subscribe((reponse: Salarie) => {

      this.data = reponse
      console.warn("test de la reponse", this.data);

      this._dialogRef.close({ profil: this.data })
    })

  }

}
