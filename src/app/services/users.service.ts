import { Observable, Subject } from 'rxjs';

import { Entreprise } from '../models/entreprise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Salarie } from '../models/salarie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _apiUrl = `${environment.API_URL}api/users`

  currentUser = new Subject<any>()
  loggedUser = new Subject<any>()

  constructor(private _router: Router,
    private _http: HttpClient) { }

  getProfile() {
    return this._http.get(`${this._apiUrl}/profile`)
  }

  clearToken() {
    localStorage.removeItem('token')
    this._router.navigate((['/login-salarie']))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
    this._router.navigate(['overview-salarie'])
  }

  setCurrentUser(user: any): void {
    this.currentUser.next(user)
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable()
  }

  setLoggedUser(utilisateur: any) {
    this.loggedUser.next(utilisateur)
  }
  getLoggedUser(): Observable<any> {
    return this.loggedUser.asObservable()
  }


  //** les CRUD en front pour les requêtes dans la base de données */

  registerSalarie(salarie: Salarie): Observable<any> {
    console.log(salarie, "Test du register 1");
    return this._http.post(`${this._apiUrl}/registerWorker`, salarie)

  }
  registerSociety(society: any): Observable<any> {
    console.log(society, "Test du register 2");
    return this._http.post(`${this._apiUrl}/registerSociety`, society)

  }



}