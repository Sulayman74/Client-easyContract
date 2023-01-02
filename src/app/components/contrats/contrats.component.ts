import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contrat } from 'src/app/models/contrat';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {


  contrats !: FormGroup<any>
  contrat = new Contrat();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.contrats = this._fb.group({
      fki_entreprise: [this.contrat.fki_entreprise, Validators.required],
      fki_salarie: [this.contrat.fki_salarie, Validators.required],
      type_contrat: this.contrat.type_contrat,
      is_fulltime: this.contrat.is_fulltime,
      date_debut: this.contrat.date_debut,
      date_fin: this.contrat.date_fin,
      periode_essai: this.contrat.periode_essai,
      motif: this.contrat.motif,
      fonction: this.contrat.fonction,
      statut: this.contrat.statut
    })
  }

  onSubmit() {
    console.log("hello World");
  }
}
