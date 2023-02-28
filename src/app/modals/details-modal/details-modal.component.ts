import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contrat } from 'src/app/models/contrat';
import { Entreprise } from 'src/app/models/entreprise';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';
import * as html2pdf from "html2pdf.js"

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {
  user !: any
  utilisateur !: Salarie
  society !: Entreprise
  salarie_id!: Number
  contrat !: Contrat
  CDI = "Contrat à durée indeterminée"
  CDD = "Contrat à durée determinée"
  notShow = false
  tableauContrat !: any[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public contratDatas: any,
    private _userService: UsersService) { }

  ngOnInit(): void {

    /** 
 *  Récupère le profil de l'entreprise et les informations du salarie 
 *  pour afficher le tableau des contrats
 */
    this._userService.getProfileSociety().subscribe((entreprise: any) => {

      this.society = entreprise.society
    })
    
    this.salarie_id = this.contratDatas.id
    this._userService.getOne(this.salarie_id).subscribe((salarie: any) => {
      this.utilisateur = salarie.salarie
      console.log(this.utilisateur.civilite,this.utilisateur.prenom);
    })
  
    this.tableauContrat = this.contratDatas.monContrat
    this.tableauContrat.map((value: any) => {

      this.contrat = value
    })
  }


  download() {
    let element = document.getElementById('download');
    let opt = {
      margin: 1,
      filename: 'contrat.pdf',
      image: { type: 'jpg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save()
  };

  printPage() {
    this.notShow = true
    setTimeout(() => {
      window.print();
    }, 800);


  }



}
