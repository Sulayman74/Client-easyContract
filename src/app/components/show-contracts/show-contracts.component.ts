import { Component, Input, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/models/contrat';
import { DataService } from 'src/app/services/data.service';
import { DetailsModalComponent } from 'src/app/modals/details-modal/details-modal.component';
import { Entreprise } from 'src/app/models/entreprise';
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
  mesContrats: any[] = []
  society !: Entreprise
  entreprise_id !: number
  searchBar = new FormControl()
  contrat !: any
  contratFiltred: any[] = []
  contrats$ !: Observable<any>
  constructor(
    private _dataService: DataService,
    public route: ActivatedRoute,
    private _matDialog: MatDialog,
    private _userService: UsersService) { }

  ngOnInit(): void {

    /* Je fais appel au resolver qui récupère le profil */
    this.route.data.subscribe(({ profilSociety }) => {
      this.society = profilSociety.society
      this.entreprise_id = this.society.entreprise_id
      // console.log("le profil de l'entreprise", this.society);
    })
    this.contrats$ = this._dataService.getContrat();
    this.contrats$.subscribe((value: Contrat[]) => {
      this.mesContrats = value.map((contrat: Contrat) => this.contrat = contrat
      )
    })
    

    //* Le forkJoin permet de fusionner plusieurs Observables de manière synchrone. Il attend que tous les Observables soient complétés avant de retourner un tableau avec les valeurs résultantes. Dans le code ci-dessus, nous attendons que les deux Observables (`dataServiceObs` et `userServiceObs`) soient complétés avant de récupérer les résultats des deux souscriptions dans un tableau. */
    /**
     * @param  {} ;constuserServiceObs$=this._userService.getWorkers(
     * @param  {} ;forkJoin([dataServiceObs$
     * @param  {} userServiceObs$]
     * @param  {} .subscribe(([contrats workers]
     * @param  {any} =>{this.mesContrats=contrats.contracts;lettableau=this.mesContrats.map((value
     */
    // const dataServiceObs$ = this._dataService.searchAll();
    // const userServiceObs$ = this._userService.getWorkers();

    // forkJoin([dataServiceObs$, userServiceObs$]).subscribe(([contrats, workers]) => {
    //   this.mesContrats = contrats.contracts;
    //   let entreprise= this.mesContrats.map((value: any) => {
    //     this.entreprise = value.entreprise_id
    //     return this.entreprise
    //   });
    //   this.onlyMyContracts = this.mesContrats.filter((val: any) => {
    //     if (val.entreprise_id == this.society.entreprise_id) {
    //       return this.onlyMyContracts = val
    //     }
    //   })
    //   this.contratTab = [...this.onlyMyContracts]

    //  this.salaries = workers
    //  console.log(this.salaries);
    //  console.log(this.onlyMyContracts);

    // let tableauWorker = workers.salaries.map((value: any) => {

    //   this.salarie = value
    // console.log("test", this.onlyMyContracts[0].salarie_id, value.salarie_id);
    //   if (value.salarie_id == this.onlyMyContracts[1].salarie_id) {
    //     console.log("le salarie correspondant", this.salarie);
    //   }
    //   return this.salarie
    // })
    // });

    /**  la Search bar */
    this.contratFiltred = this.mesContrats.filter((val:any)=>{
      console.log(val);
      return this.contratFiltred = val
    })
    this.mesContrats = [... this.contratFiltred]
    this.searchBar.valueChanges.subscribe((resultSearch: any) => {
      this.mesContrats = this.contratFiltred.filter((infoContrat: any) => {
        return infoContrat.fonction.toLowerCase().includes(resultSearch.toLowerCase()) || infoContrat.nom.toLowerCase().includes(resultSearch.toLowerCase()) || infoContrat.prenom.toLowerCase().includes(resultSearch.toLowerCase())
      })
    })
  }

  onDetails(): void {
    let dialog = this._matDialog.open(DetailsModalComponent,
      {
        height: '100%',
        width: '100%',
        data: { monContrat: this.mesContrats }
      })
  }
}
