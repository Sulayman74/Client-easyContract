import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginSalarieComponent } from './components/login-salarie/login-salarie.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginEntrepriseComponent } from './components/login-entreprise/login-entreprise.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { OverviewSalarieComponent } from './components/overview-salarie/overview-salarie.component';
import { OverviewEntrepriseComponent } from './components/overview-entreprise/overview-entreprise.component';
import { ProfilSalarieComponent } from './components/profil-salarie/profil-salarie.component';
import { ProfilEntrepriseComponent } from './components/profil-entreprise/profil-entreprise.component';
import { RegisterSalarieComponent } from './components/register-salarie/register-salarie.component';
import { RegisterEntrepriseComponent } from './components/register-entreprise/register-entreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSalarieComponent,
    LoginEntrepriseComponent,
    AccueilComponent,
    OverviewSalarieComponent,
    OverviewEntrepriseComponent,
    ProfilSalarieComponent,
    ProfilEntrepriseComponent,
    RegisterSalarieComponent,
    RegisterEntrepriseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    RouterModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
