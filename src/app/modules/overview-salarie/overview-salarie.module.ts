import { NgModule } from '@angular/core';
import { OverviewSalarieComponent } from 'src/app/components/overview-salarie/overview-salarie.component';
import { OverviewSalarieRoutingModule } from './overview-salarie-routing.module';
import { ProfilSalarieComponent } from 'src/app/components/profil-salarie/profil-salarie.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OverviewSalarieComponent,
    ProfilSalarieComponent],
  imports: [
    OverviewSalarieRoutingModule,
    SharedModule
  ]
})
export class OverviewSalarieModule { }
