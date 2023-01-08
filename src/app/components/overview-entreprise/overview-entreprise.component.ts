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
  showContracts = false;
  mesSalaries = false



  entreprise = new Entreprise();

  constructor(
    public route: ActivatedRoute,
    private _router: Router,
    private _entrepriseService: UsersService) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ profilSociety }) => {
      this.entreprise = profilSociety.society
    })
  }

  onProfil(): void {
    this._router.navigate(['profil-entreprise'], { relativeTo: this.route })
    this.mesSalaries = false
    this.contrats = false
    this.showContracts = false
    this.profil = !this.profil
  }
  onDocs(): void {
    this._router.navigate(['contrats'], { relativeTo: this.route })
    this.mesSalaries = false
    this.profil = false
    this.showContracts = false
    this.contrats = !this.contrats;
  }
  onContrat(): void {
    this._router.navigate(['show-contracts'], { relativeTo: this.route })
    this.profil = false
    this.contrats = false
    this.mesSalaries = false
    this.showContracts = !this.showContracts
  }

  onSalarie(): void {
    this._router.navigate(['mes-salaries'], { relativeTo: this.route })
    this.profil = false
    this.contrats = false
    this.showContracts = false;
    this.mesSalaries = !this.mesSalaries
  }

  onLogOut() {

    this._entrepriseService.clearToken()
    this._router.navigate(["/accueil"])

  }
}
