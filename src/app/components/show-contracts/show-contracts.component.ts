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
  onlyMyContracts !: any


  constructor(
    private _dataService: DataService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {

    /* Je fais appel au resolver qui récupère le profil */
    this.route.data.subscribe(({ profilSociety }) => {
      this.society = profilSociety.society
      // console.log("le profil de l'entreprise", this.society);
    })

    /** Je récupère ici tous les contrats et je map et filtre pour recevoir que les contrats correspondant à l'id de l'entreprise */

    this._dataService.searchAll().subscribe((contrats: any) => {
      // console.log("Voici le test demandé pour savoir c'est quoi contrats", contrats);
      this.mesContrats = contrats.contracts;
      let tableau = this.mesContrats.map((value: any) => {
        // console.log("Voici le test demandé pour savoir c'est quoi value de mesContrats.map", value);
        this.entreprise = value.entreprise_id
        return this.entreprise
      })

      this.onlyMyContracts = this.mesContrats.filter((val: any) => {
        if (val.entreprise_id == this.society.entreprise_id) {
          return this.onlyMyContracts = val
        }
      })
      console.log("tableauFiltre", this.onlyMyContracts);

    })
  }

}
