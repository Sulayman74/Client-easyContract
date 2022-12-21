import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-entreprise',
  templateUrl: './overview-entreprise.component.html',
  styleUrls: ['./overview-entreprise.component.scss']
})
export class OverviewEntrepriseComponent implements OnInit {

  monProfil = false;
  mesDocs = false;
  profil = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onProfil(): void {
    this._router.navigate(['overview-entreprise/profil-entreprise'])
    this.profil = !this.profil
  }
  onDocs():void {
    console.log('hello');
  }
}
