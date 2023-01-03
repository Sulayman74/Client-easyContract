import { ContratsComponent } from 'src/app/components/contrats/contrats.component';
import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { OverviewEntrepriseRoutingModule } from './overview-entreprise-routing.module';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OverviewEntrepriseComponent,
    ProfilEntrepriseComponent,
    ContratsComponent
  ],
  imports: [
    OverviewEntrepriseRoutingModule,
    SharedModule
  ]
})
export class OverviewEntrepriseModule { }
