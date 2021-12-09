import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { ClientsPageComponent } from './Components/clients-page/clients-page.component';
import { IncidentPageComponent } from './Components/incident-page/incident-page.component';
import { PolicyPageComponent } from './Components/policy-page/policy-page.component';

const routes: Routes = [
  {path : '', component:AdminPageComponent},
  {path : 'incident', component:IncidentPageComponent,
  canActivate: [AuthGuard]},
  {path : 'policy', component:PolicyPageComponent,
  canActivate: [AuthGuard]},
  {path : 'client', component:ClientsPageComponent,
  canActivate: [AuthGuard]},
  {path : '**', component : AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
