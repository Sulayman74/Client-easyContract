import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contrat } from 'src/app/models/contrat';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import { lastValueFrom } from 'rxjs';

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

  date = new Date()
  formatDate = this.date.toDateString()
  motifs = [{ motif1: 'Remplacement', motif2: 'Accroissement activité' }]
  status = [{ statut1: 'Employé qualifié', statut2: "Ouvrier", statut3: "Cadre" }]


  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService,
    private _contrat: DataService,
    public snackbar: MatSnackBar,
    private _countriesService: DataService) { }

  ngOnInit() {
    this.contrat.fki_entreprise = this.profilEntreprise.entreprise_id

    this.formContrat = this._fb.group({
      fki_entreprise: this.contrat.fki_entreprise,
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
    })

    this._usersService.getSocieties().subscribe((values: any) => {
      this.entreprises = values.societes
      // console.log("test values entreprise all", this.entreprises);
    })

  }


  /** Je crée ici le contrat grâce à cette méthode */
  async onSubmit() {
    const contratForm = await this.formContrat.value
    this.contrat = await Object.assign(this.contrat, contratForm)

    let test = await lastValueFrom(this._contrat.createContract(this.contrat)).then((reponse: any) => {
      console.log("reponse", reponse);
      const salarie = reponse.salarie.rows
      const contratID = reponse.contract.contrat_id
      let monSalarie = salarie.map((value: any) => {

        if (value.contrat_id == reponse.contract.contrat_id) {
          this.snackbar.open(`Vous avez bien créé un contrat avec ${value.civilite} ${value.nom}`, "OK", { duration: 3000 })

        };
      })

    })

    this.formContrat.reset();
  }
}
