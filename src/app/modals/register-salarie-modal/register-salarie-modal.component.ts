import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Salarie } from 'src/app/models/salarie';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-salarie-modal',
  templateUrl: './register-salarie-modal.component.html',
  styleUrls: ['./register-salarie-modal.component.scss']
})
export class RegisterSalarieModalComponent implements OnInit {

  registerSalarie !: FormGroup<any>
  salarie = new Salarie()
  hide = true
  mdpConfirm = true
  filteredOptions$!: Observable<string[]> | undefined
  filteredCities$ !: Observable<string[]> | undefined
  options: string[] = []
  cities: string[] = []
  countries!: any
  villes !: any

  maxDate = new Date(new Date().getFullYear() - 16, new Date().getMonth(), new Date().getDate())

  civilites = [{
    title1: "Monsieur",
    title2: "Madame"
  }]

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
  confirmPassword = new FormControl('', Validators.required)

  constructor(
    private _fb: FormBuilder,
    private _salarieService: UsersService,
    private _snackbar: MatSnackBar,
    private _dialogRef: MatDialogRef<any>,
    private _dataService: DataService) { }


  ngOnInit(): void {

    this._dataService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
      this.options = this.sortCountries();

    })


    this.registerSalarie = this._fb.group({

      civilite: [this.salarie.civilite, Validators.required],
      nom: [this.salarie.nom, Validators.required],
      prenom: [this.salarie.prenom, Validators.required],
      telephone: [this.salarie.telephone, Validators.required],
      rue: [this.salarie.rue, Validators.required],
      cp: [this.salarie.rue, Validators.required],
      ville: [this.salarie.ville, Validators.required],
      email: [this.salarie.email, [Validators.email, Validators.required]],
      mdp: [this.salarie.mdp, [Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: [this.salarie.confirmPassword, Validators.required],
      nom_jeune_fille: this.salarie.nom_jeune_fille,
      num_ss: [this.salarie.num_ss, Validators.required],
      date_naissance: [this.salarie.date_naissance, Validators.required],
      lieu_naissance: [this.salarie.lieu_naissance, Validators.required],
      pays_naissance: [this.salarie.pays_naissance, Validators.required]


    })

    this.filteredOptions$ = this.registerSalarie?.get('pays_naissance')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

  }

  sortCountries(): string[] {
    return this.countries.map((countryName: any) => countryName.name.common)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter(option => option.toLowerCase().includes(filterValue));
  }


  onSubmit(): void {
    const formulaire = this.registerSalarie.value

    const password = this.registerSalarie.value.mdp
    const confirmPassword = this.registerSalarie.value.confirmPassword

    if (password !== confirmPassword) {
      this._snackbar.open('Les mots de passe de correspondent pas', 'OK', { duration: 1500, horizontalPosition: 'end' })
      return;
    }

    this.salarie = Object.assign(this.salarie, formulaire)

    this._salarieService.registerSalarie(this.salarie).subscribe((reponse: any) => {

      let token = reponse.token
      let role = reponse.registerAWorker.role
      this._salarieService.setToken(token)
      this._salarieService.setRole(role)

    })
    this._dialogRef.close()

  }

  // ** méthode message erreur envoyé */
  getErrorMessageMail() {

    return this.email.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessagePassword() {

    return this.password.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessageConfirmPassword() {

    return this.confirmPassword.hasError('required') ? 'You must enter the same password' : '';
  }

}
