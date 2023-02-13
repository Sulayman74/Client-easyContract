import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DetailsModalComponent } from 'src/app/modals/details-modal/details-modal.component';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

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
  salarie!: any

  searchBar = new FormControl()
  contratTab!: any[];
  constructor(
    private _dataService: DataService,
    public route: ActivatedRoute,
    private _matDialog: MatDialog,
    private _userService: UsersService) { }

  ngOnInit(): void {

    /* Je fais appel au resolver qui récupère le profil */
    this.route.data.subscribe(({ profilSociety }) => {
      this.society = profilSociety.society
      // console.log("le profil de l'entreprise", this.society);
    })


    this._userService.getWorkers().subscribe((worker: any) => {
      // console.warn("mes salaries", worker);
      let tableauWorker = worker.salaries.map((value: any) => {
        console.log("test", this.onlyMyContracts[0].salarie_id, value.salarie_id);
        if (value.salarie_id == this.onlyMyContracts[0].salarie_id) {
          console.log("le salarie correspondant", value);
          this.salarie = value
        }
        return this.salarie
      })
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
      // console.log("tableauFiltre", this.onlyMyContracts);
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
        height: '100%',
        width: '100%',
        data: { monContrat: this.onlyMyContracts, monSalarie: this.salarie }
      })
  }
}
