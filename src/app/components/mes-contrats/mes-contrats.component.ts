import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-contrats',
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.scss']
})
export class MesContratsComponent implements OnInit {
  @Input() profilSalarie !: any
  constructor() { }

  ngOnInit(): void {
  }

}
