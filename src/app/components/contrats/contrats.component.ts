import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contrat } from 'src/app/models/contrat';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {


  formContrat !: FormGroup<any>
  contrat = new Contrat();
  salaries !: any[]
  entreprises !: any[]

  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService) { }

  ngOnInit(): void {
    this.formContrat = this._fb.group({
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
    this._usersService.getWorkers().subscribe((values:any)=> {
      this.salaries = values.salaries
      console.log("test values salarie all", this.salaries);
    })
    this._usersService.getSocieties().subscribe((values:any)=> {
      this.entreprises = values.societes
      console.log("test values entreprise all", this.entreprises);
    })


  
  }

  onSubmit() {
  const contrat = this.formContrat.value
     console.log("hello World", contrat);
   
  }
}