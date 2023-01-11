import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/helpers/auth.guard';
import { MesContratsComponent } from 'src/app/components/mes-contrats/mes-contrats.component';
import { NgModule } from '@angular/core';
import { OverviewSalarieComponent } from 'src/app/components/overview-salarie/overview-salarie.component';
import { ProfilSalarieComponent } from 'src/app/components/profil-salarie/profil-salarie.component';
import { ProfilSalarieResolver } from 'src/app/helpers/profil-salarie.resolver';

const routes: Routes = [
  {
    path: '', component: OverviewSalarieComponent, resolve: { profile: ProfilSalarieResolver }, canActivate:[AuthGuard],
    children: [
      { path: 'profil-salarie', component: ProfilSalarieComponent, canActivate:[AuthGuard] },
      { path: 'mes-contrats', component: MesContratsComponent,  canActivate:[AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewSalarieRoutingModule { }
