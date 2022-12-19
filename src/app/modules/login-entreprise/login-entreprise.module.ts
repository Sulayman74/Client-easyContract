import { CommonModule } from '@angular/common';
import { LoginEntrepriseComponent } from 'src/app/components/login-entreprise/login-entreprise.component';
import { LoginEntrepriseRoutingModule } from './login-entreprise-routing.module';
import { NgModule } from '@angular/core';
import { RegisterEntrepriseModalComponent } from 'src/app/modals/register-entreprise-modal/register-entreprise-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginEntrepriseComponent,
    RegisterEntrepriseModalComponent],
  imports: [
    CommonModule,
    LoginEntrepriseRoutingModule,
    SharedModule
  ]
})
export class LoginEntrepriseModule { }
