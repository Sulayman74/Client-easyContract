import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    })
  }

  onSubmit(): void {

  }
  onClick() {
    throw new Error('Method not implemented.');
    }

}
