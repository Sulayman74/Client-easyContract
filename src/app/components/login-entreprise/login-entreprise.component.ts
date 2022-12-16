import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Entreprise } from 'src/app/models/entreprise';

@Component({
  selector: 'app-login-entreprise',
  templateUrl: './login-entreprise.component.html',
  styleUrls: ['./login-entreprise.component.scss']
})
export class LoginEntrepriseComponent implements OnInit {


  loginFormSociety !: FormGroup<any>;

  entreprise = new Entreprise();
  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginFormSociety = this._fb.group({

    })
  }


  onSubmit(): void {

  }
  onClick() {
    throw new Error('Method not implemented.');
    }

}
