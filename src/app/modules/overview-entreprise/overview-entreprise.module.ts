import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { OverviewEntrepriseRoutingModule } from './overview-entreprise-routing.module';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';

@NgModule({
  declarations: [OverviewEntrepriseComponent,
  ProfilEntrepriseComponent],
  imports: [
    CommonModule,
    OverviewEntrepriseRoutingModule
  ]
})
export class OverviewEntrepriseModule { }
