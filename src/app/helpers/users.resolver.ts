import { Entreprise } from '../models/entreprise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<Entreprise> {
  constructor(private _usersService: UsersService) { }
  resolve(): Observable<Entreprise> {
    return this._usersService.getProfileSociety();
  }
}
