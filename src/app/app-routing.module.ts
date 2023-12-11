import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { CustomerIncidentsComponent } from './customer-incidents/customer-incidents.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentUpdatesComponent } from './incident-updates/incident-updates.component';
import { AddIncidentupdatesComponent } from './add-incidentupdates/add-incidentupdates.component';

const routes: Routes = [
  {path: 'incidents', component : IncidentsListComponent},
  {path: 'create-incident', component : CreateIncidentComponent},
  {path: 'update-incident/:id', component : UpdateIncidentComponent},
  {path: 'customer-incidents', component : CustomerIncidentsComponent},
  {path: 'incident-details/:id', component : IncidentDetailsComponent},
  {path: 'incident-updates/:id', component: IncidentUpdatesComponent},
  {path: 'add-update/:id',component: AddIncidentupdatesComponent},
  {path: '', redirectTo : 'incidents', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
