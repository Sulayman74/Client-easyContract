import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { RegisterSalarieModalComponent } from 'src/app/modals/register-salarie-modal/register-salarie-modal.component';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-salarie',
  templateUrl: './login-salarie.component.html',
  styleUrls: ['./login-salarie.component.scss']
})
export class LoginSalarieComponent implements OnInit {

  show: boolean = false
  loginFormSalarie !: FormGroup<any>;
  salarie = new Salarie();
  hide = true

  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    public router: Router,
    private _salarieService: UsersService) { }



  ngOnInit(): void {
    this.loginFormSalarie = this._fb.group({
      email: [this.salarie.email, [Validators.email, Validators.required]],
      mdp: [this.salarie.mdp, Validators.required]

    })
  }

  onNavigate(): void {
    this.router.navigate(["../"])

  }


  onSignUp(): void {
    const modal = this._dialog.open(RegisterSalarieModalComponent,
      {
        width: '100%',
        height: '100%',

      });

  }

  async getUser(user: any): Promise<any> {
    try {
      let reponse = await lastValueFrom(this._salarieService.loginSalarie(user))
      return reponse
    } catch (err) {
      console.log(err);
    }

  }

  onSignIn(): void {
    let loggedUser = this.loginFormSalarie.value
    this.salarie = Object.assign(this.salarie, loggedUser)

    this.getUser(loggedUser).then((results: any) => {


      if (results) {
        let role = results.datas.role
        localStorage.setItem('token', results.token)
        localStorage.setItem('role', role)
        this.router.navigate(['/overview-salarie'])

      }
      else { this.show = false }
    })
    // this._salarieService.loginSalarie(loggedUser).subscribe((results: any) => {


    // })

    this.show = true
    // setTimeout(() => this.show = false, 5000);
  }

}
