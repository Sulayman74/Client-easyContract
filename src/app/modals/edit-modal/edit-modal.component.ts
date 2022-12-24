import { FormBuilder, FormGroup } from '@angular/forms';

import { Salarie } from 'src/app/models/salarie';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  editForm !: FormGroup<any>

  salarie = new Salarie();

  constructor(private _salarieService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: Salarie,
    private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.editForm = this._fb.group({
      civilite: this.salarie.civilite,
      nom: this.salarie.nom,
      prenom: this.salarie.prenom,
      nom_jeune_fille: this.salarie.nom_jeune_fille,
      telephone: this.salarie.telephone,
      rue: this.salarie.rue,
      ville: this.salarie.ville,
      cp: this.salarie.cp,
      mdp: this.salarie.mdp,
      num_ss: this.salarie.num_ss,
      pays_naissance: this.salarie.pays_naissance,
      lieu_naissance: this.salarie.lieu_naissance,
      date_naissance: this.salarie.date_naissance
    })
  }

  onSubmit() {
    const formulaire = this.editForm.value
    this.salarie = Object.assign(this.salarie, formulaire)


    this._salarieService.updateSalarie(formulaire).subscribe((reponse: any) => {
      console.log("reponse", reponse);
    })
  }

}
