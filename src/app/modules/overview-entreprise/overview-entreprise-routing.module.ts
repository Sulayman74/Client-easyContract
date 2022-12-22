import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';
import { UsersResolver } from 'src/app/helpers/users.resolver';

const routes: Routes = [{
  path: "", component: OverviewEntrepriseComponent,
  children: [
    { path: "profil-entreprise", component: ProfilEntrepriseComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewEntrepriseRoutingModule { }
