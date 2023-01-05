import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EditSocietyComponent } from './modals/edit-society/edit-society.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './modules/shared/shared.module';
import { TokenInterceptorProvider } from './helpers/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EditSocietyComponent,
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule

  ],
  providers: [TokenInterceptorProvider,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
