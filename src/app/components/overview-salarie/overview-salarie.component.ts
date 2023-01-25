import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-overview-salarie',
  templateUrl: './overview-salarie.component.html',
  styleUrls: ['./overview-salarie.component.scss']
})
export class OverviewSalarieComponent implements OnInit {

  show: boolean = true
  monProfil = false;
  mesDocs = false;
  profil = false;
  contrats = false;


  salarie = new Salarie()

  constructor(
    private _router: Router,
    public route: ActivatedRoute,
    private _salarieService: UsersService,
    private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ profile }) => {
      if (profile) {

        this.show = false

        this.salarie = profile.worker

      }     
    })
    this._snackbar.open(`Bienvenue!! ${this.salarie.civilite} ${this.salarie.prenom}`, "OK",{duration:1300, verticalPosition:'top', horizontalPosition: 'start'})
  }

  onProfil(): void {

    this._router.navigate(['profil-salarie'], { relativeTo: this.route })
    this.profil = !this.profil;
    this.contrats = false


  }
  onDocs(): void {
    this._router.navigate(['mes-contrats'], { relativeTo: this.route })
    this.contrats = !this.contrats
    this.profil = false
  }
  onLogOut() {
    this._salarieService.clearToken()
    this._router.navigate(['/accueil'])

  }
}
