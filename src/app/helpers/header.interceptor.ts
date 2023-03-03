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



  regex = new RegExp('https://backend-easy.onrender.com');
  // regex = new RegExp('localhost:8080');
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
              message = "Bad Request, une erreur s'est produite" + ' ' + error.error.message
              break;
            case 401:
              message = "Password or mail not correct"
              break;
            case 403:
              message = "Forbidden request" + ' ' + error.error.message /** error message venant de la base de données récupéré dans mes catch des controllers avec un StatusCode 403 Forbidden  */
              break;
            case 404:
              message = error.error.message
              break;

            default: message = "Erreur de connexion"
              break;
          }
          this._snackbar.open(message, "OK", { duration: 2000 })
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
