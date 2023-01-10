import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DetailsModalComponent } from 'src/app/modals/details-modal/details-modal.component';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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

  searchBar = new FormControl()
  contratTab!: any[];
  constructor(
    private _dataService: DataService,
    public route: ActivatedRoute,
    private _matDialog: MatDialog) { }

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
// Spread du tableau pour la search bar et j'itere dessus pour l'html //
      this.contratTab = [...this.onlyMyContracts]
    })
    /**  la Search bar */
     this.searchBar.valueChanges.subscribe((resultSearch: any) => {
      this.contratTab = this.onlyMyContracts.filter((infoContrat: any) => {
        return infoContrat.fonction.toLowerCase().includes(resultSearch.toLowerCase()) || infoContrat.nom.toLowerCase().includes(resultSearch.toLowerCase()) || infoContrat.prenom.toLowerCase().includes(resultSearch.toLowerCase())
      })
    })
  }

  onDetails(): void {
    let dialog = this._matDialog.open(DetailsModalComponent,
      {
        height : '60%',
        width : '50%',
        data : this.onlyMyContracts
      })
  }
}
