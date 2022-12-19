import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OverviewSalarieComponent } from 'src/app/components/overview-salarie/overview-salarie.component';
import { ProfilSalarieComponent } from 'src/app/components/profil-salarie/profil-salarie.component';

const routes: Routes = [
  {
    path: '', component: OverviewSalarieComponent, 
    children : [
      {path:'profil-salarie', component: ProfilSalarieComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewSalarieRoutingModule { }
