import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mes-salaries',
  templateUrl: './mes-salaries.component.html',
  styleUrls: ['./mes-salaries.component.scss']
})
export class MesSalariesComponent implements OnInit {
  @Input() profilEntreprise !: any
  displayedColumns = ['Civilite', 'Nom',"Prenom","Fonction","Statut","Remuneration"];
  dataSource : any [] =[];


  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this._userService.getMyWorkers().subscribe((worker:any)=>{
      console.log("mon worker",worker.datasworker);
      this.dataSource = worker.datasworker
    })
    console.log("profilEntrprise",this.profilEntreprise);
  }

}
