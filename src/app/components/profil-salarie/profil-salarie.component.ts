import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil-salarie',
  templateUrl: './profil-salarie.component.html',
  styleUrls: ['./profil-salarie.component.scss']
})
export class ProfilSalarieComponent implements OnInit {

  
  constructor(
    private _salarieService: UsersService
  ) { }

  ngOnInit(): void {


  }

}