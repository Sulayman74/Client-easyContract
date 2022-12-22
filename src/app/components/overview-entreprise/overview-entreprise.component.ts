import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Entreprise } from 'src/app/models/entreprise';

@Component({
  selector: 'app-overview-entreprise',
  templateUrl: './overview-entreprise.component.html',
  styleUrls: ['./overview-entreprise.component.scss']
})
export class OverviewEntrepriseComponent implements OnInit {

  monProfil = false;
  mesDocs = false;
  profil = false;

  entreprise = new Entreprise();

  constructor(
    public route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    // this.route.data.subscribe(({ profil }) => {
    //   this.entreprise = profil
    //   console.log("test ici profil", this.entreprise);
    // })
  }

  onProfil(): void {
    this._router.navigate(['overview-entreprise/profil-entreprise'], { relativeTo: this.route })
    this.profil = !this.profil
  }
  onDocs(): void {
    console.log('hello');
  }
}
