import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-overview-salarie',
  templateUrl: './overview-salarie.component.html',
  styleUrls: ['./overview-salarie.component.scss']
})
export class OverviewSalarieComponent implements OnInit {


  monProfil = false;
  mesDocs = false;
  profil = false;


  salarie = new Salarie()

  constructor(
    private _router: Router,
    public route: ActivatedRoute,
    private _salarieService: UsersService) { }

  ngOnInit(): void {

    this.route.data.subscribe(({ profile }) => {
      this.salarie = profile.worker
      console.log(profile, "test ici profile", this.salarie);
    })
  }

  onProfil(): void {
    this._router.navigate(['profil-salarie'], { relativeTo: this.route })
    this.profil = !this.profil;
    
  }
  onDocs(): void {
    console.log("hello");
  }
  onLogOut() {

    this._salarieService.clearToken()

  }
}
