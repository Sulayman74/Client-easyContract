import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-salaries',
  templateUrl: './mes-salaries.component.html',
  styleUrls: ['./mes-salaries.component.scss']
})
export class MesSalariesComponent implements OnInit {
  @Input() profilEntreprise !: any

  constructor() { }

  ngOnInit(): void {
  }

}
