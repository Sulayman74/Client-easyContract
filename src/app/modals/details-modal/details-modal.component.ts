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
  utilisateur !: any
  society !: Entreprise
  salarie!: Salarie
  contrat !: Contrat
  CDI = "Contrat à durée indeterminée"
  CDD = "Contrat à durée determinée"
  notShow = false
  test !: any[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public contratDatas: any,
    private _userService: UsersService) { }

  ngOnInit(): void {
    this._userService.getProfileSociety().subscribe((entreprise: any) => {
      console.log("entreprise", entreprise.society);

      this.society = entreprise.society
    })
    //     this.contratDatas = this.contratDatas.filter((value: any) => {

    // })
    this.salarie = this.contratDatas.id
    this._userService.getOne(this.salarie).subscribe((user: any) => {
      this.utilisateur = user
      console.log(this.utilisateur);
    })
    this._userService.getCurrentUser().subscribe((value: any) => {
      this.user = value
      console.log(this.user);
    })
    console.log(this.salarie);
    this.test = this.contratDatas.monContrat
    console.log(this.test);
    this.test.map((value: any) => {

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
