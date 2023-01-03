import { RouterModule, Routes } from '@angular/router';

import { ContratsComponent } from 'src/app/components/contrats/contrats.component';
import { NgModule } from '@angular/core';
import { OverviewSalarieComponent } from 'src/app/components/overview-salarie/overview-salarie.component';
import { ProfilSalarieComponent } from 'src/app/components/profil-salarie/profil-salarie.component';
import { ProfilSalarieResolver } from 'src/app/helpers/profil-salarie.resolver';

const routes: Routes = [
  {
    path: '', component: OverviewSalarieComponent, resolve: { profile: ProfilSalarieResolver },
    children: [
      { path: 'profil-salarie', component: ProfilSalarieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewSalarieRoutingModule { }
