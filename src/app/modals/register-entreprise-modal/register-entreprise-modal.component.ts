import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Entreprise } from 'src/app/models/entreprise';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-entreprise-modal',
  templateUrl: './register-entreprise-modal.component.html',
  styleUrls: ['./register-entreprise-modal.component.scss']
})
export class RegisterEntrepriseModalComponent implements OnInit {

  registerSociety !: FormGroup<any>
  entreprise = new Entreprise()
  hide = true
  mdpConfirm = true
  laRue !: any
  options: string[] = []
  zipCode !: any
  addresses!: any

  filteredOptions$ !: Observable<string[]> | undefined

  civilites = [{
    title1: "Monsieur",
    title2: "Madame"
  }]

  lat!: number
  lng!: number

  email = new FormControl('', [Validators.required, Validators.email]);
  mdp = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  confirmPassword = new FormControl('', Validators.required)

  constructor(
    private _fb: FormBuilder,
    private _entrepriseService: UsersService,
    private _snackbar: MatSnackBar,
    private _dialogRef: MatDialogRef<any>,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {


    this.registerSociety = this._fb.group({
      civilite: [this.entreprise.civilite, Validators.required],
      nom: [this.entreprise.nom, Validators.required],
      prenom: [this.entreprise.prenom, Validators.required],
      telephone: [this.entreprise.telephone, Validators.required],
      rue: [this.entreprise.rue, Validators.required],
      cp: [this.entreprise.cp, Validators.required],
      ville: [this.entreprise.ville, Validators.required],
      email: [this.entreprise.email, Validators.email],
      mdp: [this.entreprise.mdp, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: [this.entreprise.confirmPassword, Validators.required],
      siret: [this.entreprise.siret, Validators.required],
      raison_sociale: [this.entreprise.raison_sociale, Validators.required],
      code_ape: [this.entreprise.code_ape, Validators.required]

    })



    this.filteredOptions$ = this.registerSociety?.get('ville')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

    this.onKeyUp()
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter(option => option.toLowerCase().includes(filterValue));
  }



  onSubmit() {
    const formulaire = this.registerSociety.value

    const password = this.registerSociety.value.mdp
    const confirmPassword = this.registerSociety.value.confirmPassword

    if (password !== confirmPassword) {
      this._snackbar.open('Les mots de passe de correspondent pas', 'OK', { duration: 1500, horizontalPosition: 'end' })
      return;
    }

    this.entreprise = Object.assign(this.entreprise, formulaire)


    this._entrepriseService.registerSociety(this.entreprise).subscribe((reponse: any) => {

      let token = reponse.token
      let role = reponse.addASociety.role
      this._entrepriseService.setToken(token)
      this._entrepriseService.setRole(role)
    })
    this._dialogRef.close();
  }

  // ** méthode message erreur envoyé */
  getErrorMessageMail() {

    return this.email.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessagePassword() {

    return this.mdp.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessageConfirmPassword() {

    return this.confirmPassword.hasError('required') ? 'You must enter the same password' : '';
  }

  onKeyUp() {

    const searchText = this.registerSociety.value.ville;
    const zipCode = this.registerSociety.value.cp
    this._dataService.getAutocompleterGeo(searchText).subscribe(data => {
      this.addresses = data;
      console.log("données ville", this.addresses[0].code);
      this.options = this.sortCities()
      this._dataService.getPostalCode(this.addresses[0].code).subscribe((cp: any) => {
        console.log(cp.codesPostaux
        [0]);
        this.zipCode = cp.codesPostaux
        [0]
      })
    });
  }

  sortCities(): string[] {
    return this.addresses.map((value: any) => value.nom)
  }
  geoloc() {
    console.log("hello");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude
        this.lng = position.coords.longitude
        this._dataService.getGeoLocation(this.lat, this.lng).subscribe((location: any) => {
          console.log("location", location.features[0].properties.name);
          this.laRue = location.features[0].properties.name
        })
      })
    }
  }

  handleClick(event: Event) {
    event.preventDefault();
  }


}
