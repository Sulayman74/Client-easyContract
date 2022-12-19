import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor( private _router :Router ) { }

  ngOnInit(): void {

  }

  onClickSalarie():void {
  
    this._router.navigate(['/login-salarie'])
  }

  onClickEntreprise() {
    this._router.navigate(['/login-entreprise'])
    }
    

}
