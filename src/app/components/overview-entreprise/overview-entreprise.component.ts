import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Entreprise } from 'src/app/models/entreprise';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-overview-entreprise',
  templateUrl: './overview-entreprise.component.html',
  styleUrls: ['./overview-entreprise.component.scss']
})
export class OverviewEntrepriseComponent implements OnInit {

  monProfil = false;
  mesDocs = false;
  profil = false;
  contrats = false;

  

  entreprise = new Entreprise();

  constructor(
    public route: ActivatedRoute,
    private _router: Router,
    private _entrepriseService : UsersService) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ profilSociety }) => {
      this.entreprise = profilSociety.society
      console.log("test ici profil 15555", this.entreprise);
    })
  }

  onProfil(): void {
    this._router.navigate(['profil-entreprise'], { relativeTo: this.route })
    this.profil = !this.profil
    this.contrats = false
  }
  onDocs(): void {
    this._router.navigate(['contrats'], { relativeTo: this.route })
    this.contrats = !this.contrats;
    this.profil = false
  }

  onLogOut() {

    this._entrepriseService.clearToken()

  }
}
