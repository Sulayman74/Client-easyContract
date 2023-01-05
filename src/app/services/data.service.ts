import { HttpClient, HttpEvent } from '@angular/common/http';

import { Contrat } from '../models/contrat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private _apiUrl = `${environment.API_URL}api/contracts`

  constructor(
    private _http : HttpClient
    ) { }

    createContract(contrat:Contrat): Observable<any> {
      return this._http.post(`${this._apiUrl}/createContract`,contrat)
    }

    searchAll(): Observable<any> {
      return this._http.get(`${this._apiUrl}/allContracts`)
    }
  
}
