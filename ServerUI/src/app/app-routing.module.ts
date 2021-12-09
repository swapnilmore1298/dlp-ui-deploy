import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { ClientsPageComponent } from './Components/clients-page/clients-page.component';
import { IncidentPageComponent } from './Components/incident-page/incident-page.component';
import { PolicyPageComponent } from './Components/policy-page/policy-page.component';

const routes: Routes = [
  {path : 'incident', component:IncidentPageComponent},
  {path : 'policy', component:PolicyPageComponent},
  {path : 'client', component:ClientsPageComponent},
  {path : 'admin', component:AdminPageComponent},
  {path : '**', component : IncidentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
