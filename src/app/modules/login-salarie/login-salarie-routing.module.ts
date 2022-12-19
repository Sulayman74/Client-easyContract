import { RouterModule, Routes } from '@angular/router';

import { LoginSalarieComponent } from 'src/app/components/login-salarie/login-salarie.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LoginSalarieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSalarieRoutingModule { }
