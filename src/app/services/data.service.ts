import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

import { Contrat } from '../models/contrat';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _apiUrl = `${environment.API_URL}/api/contracts`
  urlEuropeCountries = "https://restcountries.com/v3.1/region/europe"

  constructor(
    private _http: HttpClient
  ) { }

  getCountries(): Observable<any> {
    return this._http.get(this.urlEuropeCountries)
  }


  createContract(contrat: Contrat): Observable<any> {
    return this._http.post(`${this._apiUrl}/createContract`, contrat)
  }

  searchAll(): Observable<any> {
    return this._http.get(`${this._apiUrl}/allContracts`)
  }

}
