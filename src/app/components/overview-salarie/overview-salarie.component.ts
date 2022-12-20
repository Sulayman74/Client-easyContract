import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-salarie',
  templateUrl: './overview-salarie.component.html',
  styleUrls: ['./overview-salarie.component.scss']
})
export class OverviewSalarieComponent implements OnInit {

  monProfil = false;
  mesDocs = false;
  profil = false;
  constructor(private _router : Router,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onProfil() : void {
    this._router.navigate(['profil-salarie'], { relativeTo: this.route })
    this.profil = !this.profil;
  }
  onDocs() : void {
    console.log("hello test","docs");
  }
}
