import { RouterModule, Routes } from '@angular/router';

import { AuthGuardEntrepriseGuard } from 'src/app/helpers/auth-guard-entreprise.guard';
import { ContratsComponent } from 'src/app/components/contrats/contrats.component';
import { MesSalariesComponent } from 'src/app/components/mes-salaries/mes-salaries.component';
import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';
import { ShowContractsComponent } from 'src/app/components/show-contracts/show-contracts.component';
import { UsersResolver } from 'src/app/helpers/users.resolver';

const routes: Routes = [{
  path: "", component: OverviewEntrepriseComponent, resolve: { profilSociety: UsersResolver }, canActivate:[AuthGuardEntrepriseGuard],
  children: [
    { path: "profil-entreprise", component: ProfilEntrepriseComponent, canActivate:[AuthGuardEntrepriseGuard] },
    { path: 'contrats', component: ContratsComponent, canActivate:[AuthGuardEntrepriseGuard] },
    { path: 'show-contracts', component: ShowContractsComponent, canActivate:[AuthGuardEntrepriseGuard] },
    { path: 'mes-salaries', component: MesSalariesComponent, canActivate:[AuthGuardEntrepriseGuard] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewEntrepriseRoutingModule { }
