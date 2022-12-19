import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: "",redirectTo:'accueil', pathMatch:'full'},
  {path: 'accueil', component: AccueilComponent },
  {path: 'login-salarie', loadChildren:()=> import('./modules/login-salarie/login-salarie.module').then(m => m.LoginSalarieModule)},
  {path : 'login-entreprise', loadChildren:()=> import('./modules/login-entreprise/login-entreprise.module').then(m=> m.LoginEntrepriseModule)},
  {path: 'overview-salarie', loadChildren:()=> import('./modules/overview-salarie/overview-salarie.module').then(m => m.OverviewSalarieModule)},
  {path : 'overview-entreprise', loadChildren:()=> import('./modules/overview-entreprise/overview-entreprise.module').then(m => m.OverviewEntrepriseModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
