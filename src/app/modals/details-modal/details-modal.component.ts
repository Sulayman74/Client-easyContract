import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  date = new Date()
  todayString: string = this.date.toDateString();

  constructor(
    @Inject(MAT_DIALOG_DATA) public contrat: any,
    private _profilEntreprise: UsersService) { }

  ngOnInit(): void {
    this._profilEntreprise.getProfileSociety().subscribe((entreprise: any) => {
      console.log("entreprise", entreprise);
    })
    console.log(this.contrat,"et",this.todayString);




  }

  printPage() {
    window.print();
  }



}
