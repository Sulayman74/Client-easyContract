import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Entreprise } from 'src/app/models/entreprise';
import { MatDialog } from '@angular/material/dialog';
import { RegisterEntrepriseModalComponent } from 'src/app/modals/register-entreprise-modal/register-entreprise-modal.component';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-entreprise',
  templateUrl: './login-entreprise.component.html',
  styleUrls: ['./login-entreprise.component.scss']
})
export class LoginEntrepriseComponent implements OnInit {


  loginFormSociety !: FormGroup<any>;
  entreprise = new Entreprise();

  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _entrepriseService: UsersService
  ) { }


  ngOnInit(): void {
    this.loginFormSociety = this._fb.group({
      email: [this.entreprise.email, Validators.email],
      mdp: [this.entreprise.mdp, Validators.required]

    })
  }


  onSignUp(): void {
    const modal = this._dialog.open(RegisterEntrepriseModalComponent,
      {
        width: '100%',
        height: '100%',
      });

  }
  onSignIn(): void {

    let loggedUser = this.loginFormSociety.value

    this.entreprise = Object.assign(this.entreprise, loggedUser)

    this._entrepriseService.loginEntreprise(loggedUser).subscribe((results: any) => {
      
      let role = results.datas.role
      if (results) {
        localStorage.setItem('token', results.token)
        localStorage.setItem('role',role)
        this._router.navigate(['/overview-entreprise'])
      }


    })

  }


}
