import { ContratsComponent } from 'src/app/components/contrats/contrats.component';
import { MatTableModule } from "@angular/material/table";
import { MesSalariesComponent } from 'src/app/components/mes-salaries/mes-salaries.component';
import { NgModule } from '@angular/core';
import { OverviewEntrepriseComponent } from 'src/app/components/overview-entreprise/overview-entreprise.component';
import { OverviewEntrepriseRoutingModule } from './overview-entreprise-routing.module';
import { ProfilEntrepriseComponent } from 'src/app/components/profil-entreprise/profil-entreprise.component';
import { SharedModule } from '../shared/shared.module';
import { ShowContractsComponent } from 'src/app/components/show-contracts/show-contracts.component';

@NgModule({
  declarations: [
    OverviewEntrepriseComponent,
    ProfilEntrepriseComponent,
    ContratsComponent,
    ShowContractsComponent,
    MesSalariesComponent,



  ],
  imports: [
    OverviewEntrepriseRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class OverviewEntrepriseModule { }
