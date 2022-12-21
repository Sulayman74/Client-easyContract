import { Component, Input, OnInit } from '@angular/core';

import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil-salarie',
  templateUrl: './profil-salarie.component.html',
  styleUrls: ['./profil-salarie.component.scss']
})
export class ProfilSalarieComponent implements OnInit {


  @Input() profilSalarie!: any
  constructor(
    private _salarieService: UsersService
  ) { }

  ngOnInit(): void {
console.log("je suis dans le profil salarie",this.profilSalarie);
  }

}