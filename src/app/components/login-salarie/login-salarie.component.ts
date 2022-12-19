import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { RegisterSalarieModalComponent } from 'src/app/modals/register-salarie-modal/register-salarie-modal.component';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-login-salarie',
  templateUrl: './login-salarie.component.html',
  styleUrls: ['./login-salarie.component.scss']
})
export class LoginSalarieComponent implements OnInit {


  loginFormSalarie !: FormGroup<any>;
  salarie = new Salarie();

  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router : Router) { }

  ngOnInit(): void {
    this.loginFormSalarie = this._fb.group({
      email: [this.salarie.email, [Validators.email, Validators.required]],
      mdp: [this.salarie.mdp, Validators.required]

    })
  }

  onSignUp(): void {
    const modal = this._dialog.open(RegisterSalarieModalComponent,
      {
        width: '100%',
        height: '100%',
        
      });

  }

  onSignIn(): void  {
    
    this._router.navigate(['/overview-salarie'])
  }

}
