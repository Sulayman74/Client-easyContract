import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contrat } from 'src/app/models/contrat';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {

  @Input() profilEntreprise!: any
  formContrat !: FormGroup<any>
  contrat = new Contrat();
  salaries !: any[]
  entreprises !: any[]
  motifs = [{ motif1:'Remplacement', motif2:'Accroissement activité'}]
  

  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService,
    private _contrat: DataService,
    public snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.formContrat = this._fb.group({
      fki_entreprise: this.profilEntreprise.entreprise_id,
      fki_salarie: [this.contrat.fki_salarie, Validators.required],
      type_contrat: this.contrat.type_contrat,
      is_fulltime: this.contrat.is_fulltime,
      date_debut: this.contrat.date_debut,
      date_fin: this.contrat.date_fin,
      periode_essai: this.contrat.periode_essai,
      motif: this.contrat.motif,
      remuneration: this.contrat.remuneration,
      fonction: this.contrat.fonction,
      statut: this.contrat.statut
    })
    this._usersService.getWorkers().subscribe((values: any) => {
      this.salaries = values.salaries
      // console.log("test values salarie all", this.salaries);
    })
    this._usersService.getSocieties().subscribe((values: any) => {
      this.entreprises = values.societes
      // console.log("test values entreprise all", this.entreprises);
    })



  }

  onSubmit() {
    const contratForm = this.formContrat.value
    this.contrat = Object.assign(this.contrat, contratForm)

    this._contrat.createContract(this.contrat).subscribe((reponse: any) => {
      
      const salarie = reponse.salarie.rows
      const contrat = reponse.contract.contrat_id
      console.warn(salarie, contrat);

      /** je fais ici pour recevoir les données du salarie pour la snack bar  */
      let monSalarie = salarie.map((value:any)=>{
        console.log(value);
        if(value.contrat_id == reponse.contract.contrat_id) {
          this.snackbar.open(`Vous avez bien créé un contrat avec ${value.nom}`, "OK")
        }
       ;
      })
      
      this.formContrat.reset();

    })
  }
}
