import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat } from 'src/app/models/contrat';
import { Entreprise } from 'src/app/models/entreprise';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  society !: Entreprise
  salarie!: Salarie
  contrat !: Contrat
  CDI = "Contrat à durée indeterminée"
  CDD = "Contrat à durée determinée"
  notShow = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public contratDatas: any,
    private _profilEntreprise: UsersService) { }

  ngOnInit(): void {
    this._profilEntreprise.getProfileSociety().subscribe((entreprise: any) => {
      console.log("entreprise", entreprise.society);
      this.society = entreprise.society
    })

    this.salarie = this.contratDatas.monSalarie
    console.log("mon salarie", this.salarie);

    console.log("contrats", this.contratDatas.monContrat);
    this.contrat = this.contratDatas.monContrat[0]
  }

  printPage() {
    this.notShow = true
    setTimeout(() => {
      window.print();
    }, 800);


  }



}
