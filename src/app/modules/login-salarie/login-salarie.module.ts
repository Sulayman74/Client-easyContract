import { LoginSalarieComponent } from 'src/app/components/login-salarie/login-salarie.component';
import { LoginSalarieRoutingModule } from './login-salarie-routing.module';
import { NgModule } from '@angular/core';
import { RegisterSalarieModalComponent } from 'src/app/modals/register-salarie-modal/register-salarie-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginSalarieComponent,
    RegisterSalarieModalComponent],
  imports: [
    LoginSalarieRoutingModule,
    SharedModule
  ]
})
export class LoginSalarieModule { }
