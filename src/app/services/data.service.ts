import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

import { Contrat } from '../models/contrat';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _apiUrl = `${environment.API_URL}/api/contracts`
  urlCountries = "https://cors-anywhere.herokuapp.com/https://restcountries.com/v3.1/all"

  urlCities = "https://geo.api.gouv.fr/communes?codePostal="

  urlGeoLoc = "https://cors-anywhere.herokuapp.com/https://api-adresse.data.gouv.fr/reverse/"

  constructor(
    private _http: HttpClient
  ) { }

  getCountries(): Observable<any> {
    return this._http.get(this.urlCountries)
  }

  getPostalCode(codePostal: string) {
    return this._http.get<any>(`https://geo.api.gouv.fr/communes/${codePostal}`);
  }

  // getCity(zipCode:number): Observable<any> {
  //   let parameters = new HttpParams()
  //     .append("", zipCode)
  //   return this._http.get(this.urlCities,
  //     { params: parameters })
  // }
  getAutocompleterGeo(searchText: string) {
    return this._http.get(`https://geo.api.gouv.fr/communes?nom=${searchText}&fields=departement&boost=population&limit=5`);
  }

  createContract(contrat: Contrat): Observable<any> {
    return this._http.post(`${this._apiUrl}/createContract`, contrat)
  }

  searchAll(): Observable<any> {
    return this._http.get(`${this._apiUrl}/allContracts`)
  }
  getContrat(): Observable<any> {
    return this._http.get(`${this._apiUrl}/contrat`)
  }
  getGeoLocation(lat: number, lon: number): Observable<any> {
    let parameters = new HttpParams()
      .append("lat", lat)
      .append("lon", lon)
    return this._http.get(this.urlGeoLoc,
      { params: parameters })
  }
}
