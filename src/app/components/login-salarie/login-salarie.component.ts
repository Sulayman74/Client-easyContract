import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Salarie } from 'src/app/models/salarie';

@Component({
  selector: 'app-login-salarie',
  templateUrl: './login-salarie.component.html',
  styleUrls: ['./login-salarie.component.scss']
})
export class LoginSalarieComponent implements OnInit {


  loginFormSalarie !: FormGroup<any>;

  salarie = new Salarie();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormSalarie = this._fb.group({
      email: [this.salarie.email, [Validators.email, Validators.required]],
      mdp: [this.salarie.mdp, Validators.required]

    })
  }

  onSubmit(): void {

  }
  onClick() {

  }

}
