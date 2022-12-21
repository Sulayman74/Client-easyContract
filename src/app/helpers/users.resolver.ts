import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(private _usersService: UsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this._usersService.getProfileWorker()
    this._usersService.getProfileSociety()
    return of(true);
  }
}
