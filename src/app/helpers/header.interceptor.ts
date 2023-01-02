import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {



  regex = new RegExp('localhost:8080');
  // ** je fais un regex pour vérirification avec les headers de l'url pour les requêtes dans la base de données avec modification où je rajoute le token, sinon l'interceptor laisse passer sans rien changer */

  constructor(private _snackbar: MatSnackBar) { }



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userToken = UsersService.getToken(); //** utilisation de la fonction static du service UserService getToken() */

    if (this.regex.test(request.url)) {
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${userToken}`)
      })

      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          let message = ""
          switch (error.status) {
            case 400:
              message = "Bad Request, je viens de l'interceptor"
              break;
            case 401:
              message = "Password or mail not correct"
              break;
            case 404:
              message = "Vous n'êtes pas bien connecté"
              break;

            default: message = "Erreur de connexion"
              break;
          }
          this._snackbar.open(message, "ok")
          return next.handle(modifiedReq)
        })
      )
    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true
}
