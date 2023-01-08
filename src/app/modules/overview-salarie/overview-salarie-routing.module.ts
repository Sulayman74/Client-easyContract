import { RouterModule, Routes } from '@angular/router';

import { MesContratsComponent } from 'src/app/components/mes-contrats/mes-contrats.component';
import { NgModule } from '@angular/core';
import { OverviewSalarieComponent } from 'src/app/components/overview-salarie/overview-salarie.component';
import { ProfilSalarieComponent } from 'src/app/components/profil-salarie/profil-salarie.component';
import { ProfilSalarieResolver } from 'src/app/helpers/profil-salarie.resolver';

const routes: Routes = [
  {
    path: '', component: OverviewSalarieComponent, resolve: { profile: ProfilSalarieResolver },
    children: [
      { path: 'profil-salarie', component: ProfilSalarieComponent },
      { path: 'mes-contrats', component: MesContratsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewSalarieRoutingModule { }
