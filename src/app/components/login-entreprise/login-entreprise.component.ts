import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Entreprise } from 'src/app/models/entreprise';
import { MatDialog } from '@angular/material/dialog';
import { RegisterEntrepriseModalComponent } from 'src/app/modals/register-entreprise-modal/register-entreprise-modal.component';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-entreprise',
  templateUrl: './login-entreprise.component.html',
  styleUrls: ['./login-entreprise.component.scss']
})
export class LoginEntrepriseComponent implements OnInit {

  show: boolean = false
  loginFormSociety !: FormGroup<any>;
  entreprise = new Entreprise();
  hide = true

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

  onNavigate(): void {
    this._router.navigate(["../"])
  }
  onSignUp(): void {
    const modal = this._dialog.open(RegisterEntrepriseModalComponent,
      {
        width: '100%',
        height: '100%',
      });

  }



  async getUser(user: any): Promise<any> {
    try {
      let reponse = await lastValueFrom(this._entrepriseService.loginEntreprise(user))
      return reponse
    } catch (err) {
      console.log(err);
    }

  }

  onSignIn(): void {
    let loggedUser = this.loginFormSociety.value
    this.entreprise = Object.assign(this.entreprise, loggedUser)

    this.getUser(loggedUser).then((results: any) => {

      if (results) {
        let role = results.datas.role
        localStorage.setItem('token', results.token)
        localStorage.setItem('role', role)
        this._router.navigate(['/overview-entreprise'])

      }
      else { this.show = false }
    })




    this.show = true
    // setTimeout(() => this.show = false, 5000);
  }


}
