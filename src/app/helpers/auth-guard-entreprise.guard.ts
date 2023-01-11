import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardEntrepriseGuard implements CanActivate {


  constructor(
    private _authGuard: UsersService,
    private _router: Router,
    private _snackbar: MatSnackBar) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isSociety = this._authGuard.getRole()
    let isAuth = this._authGuard.isAuthenticated()

    if (isAuth && isSociety) {
      return true
    }
    this._snackbar.open("Vous n'êtes pas connecté en tant qu'entreprise, vous n'avez pas l'accès à cette page", "OK", { duration: 2500 })
    return this._router.navigate(["/accueil"])
  }

}
