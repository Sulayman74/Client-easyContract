import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mes-salaries',
  templateUrl: './mes-salaries.component.html',
  styleUrls: ['./mes-salaries.component.scss']
})
export class MesSalariesComponent implements OnInit {
  @Input() profilEntreprise !: any
  displayedColumns = ['name', 'salary'];
  dataSource = [
    { name: 'John', salary: '$5000' },
    { name: 'Jane', salary: '$4000' },
    { name: 'Jill', salary: '$3000' },
  ];


  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this._userService.getMyWorkers().subscribe((worker:any)=>{
      console.log("mon worker",worker);
    })
    console.log("profilEntrprise",this.profilEntreprise);
  }

}
