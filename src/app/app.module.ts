import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LoginEntrepriseComponent } from './components/login-entreprise/login-entreprise.component';
import { LoginSalarieComponent } from './components/login-salarie/login-salarie.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterSalarieModalComponent } from './modals/register-salarie-modal/register-salarie-modal.component';
import { SharedModule } from './modules/shared/shared.module';
import { RegisterEntrepriseModalComponent } from './modals/register-entreprise-modal/register-entreprise-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSalarieComponent,
    LoginEntrepriseComponent,
    AccueilComponent,
    RegisterSalarieModalComponent,
    RegisterEntrepriseModalComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
