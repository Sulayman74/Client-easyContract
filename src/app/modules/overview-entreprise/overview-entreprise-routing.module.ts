import { RouterModule, Routes } from '@angular/router';

import { ContratsComponent } from 'src/app/components/contrats/contrats.component';
import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';
import { ShowContractsComponent } from 'src/app/components/show-contracts/show-contracts.component';
import { UsersResolver } from 'src/app/helpers/users.resolver';

const routes: Routes = [{
  path: "", component: OverviewEntrepriseComponent, resolve: { profilSociety: UsersResolver },
  children: [
    { path: "profil-entreprise", component: ProfilEntrepriseComponent },
    { path: 'contrats', component: ContratsComponent },
    { path: 'show-contracts', component: ShowContractsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewEntrepriseRoutingModule { }
