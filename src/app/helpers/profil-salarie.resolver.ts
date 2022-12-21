import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Salarie } from '../models/salarie';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})

export class ProfilSalarieResolver implements Resolve<Salarie> {

  constructor(private _salarieService: UsersService) { }

  resolve(): Observable<Salarie> {
    return this._salarieService.getProfileWorker()
  }
}
