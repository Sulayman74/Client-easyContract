import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entreprise } from 'src/app/models/entreprise';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-society',
  templateUrl: './edit-society.component.html',
  styleUrls: ['./edit-society.component.scss']
})
export class EditSocietyComponent implements OnInit {

  editForm !: FormGroup<any>

  entreprise = new Entreprise()

  constructor(
    private _entrepriseService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {

    this.editForm = this._fb.group({
      civilite: this.data.civilite,
      raison_sociale : this.data.raison_sociale,
      nom: this.data.nom,
      prenom: this.data.prenom,
      telephone: this.data.telephone,
      email: this.data.email,
      rue: this.data.rue,
      ville: this.data.ville,
      cp: this.data.cp,
      siret: this.data.siret,
      code_ape: this.data.code_ape
    })

  }


  onSubmit() {
    const formulaire = this.editForm.value
    this.entreprise = Object.assign(this.entreprise, formulaire)


    this._entrepriseService.updateSociety(formulaire).subscribe((reponse: Entreprise) => {

      this.data = reponse
      console.warn("test de la reponse", this.data);

      this._dialogRef.close({ profil: this.data })
    })

  }
}
