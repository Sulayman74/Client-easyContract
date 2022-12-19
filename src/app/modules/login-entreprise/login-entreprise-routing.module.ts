import { RouterModule, Routes } from '@angular/router';

import { LoginEntrepriseComponent } from 'src/app/components/login-entreprise/login-entreprise.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component:LoginEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEntrepriseRoutingModule { }
