import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Entreprise } from 'src/app/models/entreprise';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-entreprise-modal',
  templateUrl: './register-entreprise-modal.component.html',
  styleUrls: ['./register-entreprise-modal.component.scss']
})
export class RegisterEntrepriseModalComponent implements OnInit {

  registerSociety !: FormGroup<any>
  entreprise = new Entreprise()

  civilites = [{
    title1: "Monsieur",
    title2: "Madame"
  }]

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required)

  constructor(
    private _fb: FormBuilder,
    private _entrepriseService: UsersService,
    private _router: Router,
    private _dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {

    this.registerSociety = this._fb.group({
      civilite: [this.entreprise.civilite, Validators.required],
      nom: [this.entreprise.nom, Validators.required],
      prenom: [this.entreprise.prenom, Validators.required],
      telephone: [this.entreprise.telephone, Validators.required],
      rue: [this.entreprise.rue, Validators.required],
      cp: [this.entreprise.cp, Validators.required],
      ville: [this.entreprise.ville, Validators.required],
      email: [this.entreprise.email, Validators.email],
      mdp: [this.entreprise.mdp, Validators.required],
      siret: [this.entreprise.siret, Validators.required],
      raison_sociale: [this.entreprise.raison_sociale, Validators.required],
      code_ape: [this.entreprise.code_ape, Validators.required]

    })
  }

  onSubmit() {
    const formulaire = this.registerSociety.value
    this.entreprise = Object.assign(this.entreprise, formulaire)

    this._entrepriseService.registerSociety(this.entreprise).subscribe((reponse: any) => {
      // console.log("test onSubmit register entreprise", reponse);
      this._entrepriseService.setToken(reponse.token)
    })

    this._dialogRef.close();
  }

  // ** méthode message erreur envoyé */
  getErrorMessageMail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password') ? 'Not matching passwords' : '';
  }


}
