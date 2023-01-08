import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-show-contracts',
  templateUrl: './show-contracts.component.html',
  styleUrls: ['./show-contracts.component.scss']
})
export class ShowContractsComponent implements OnInit {

  @Input() profilEntreprise!: any
  mesContrats !: any
  society !: any
  entreprise !: any
  onlyMy !: any


  constructor(
    private _dataService: DataService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ profilSociety }) => {
      this.society = profilSociety.society
      // console.log("le profil de l'entreprise", this.society);
    })
    this._dataService.searchAll().subscribe((contrats: any) => {

      this.mesContrats = contrats.contracts;
      let tableau = this.mesContrats.map((value: any) => {
        this.entreprise = value.entreprise_id
        return this.entreprise
      })

      this.onlyMy = this.mesContrats.filter((val: any) => {
        if (val.entreprise_id == this.society.entreprise_id) {
          return this.onlyMy = val
        }
      })
      console.log("tableauFiltre", this.onlyMy);

    })
  }

}
