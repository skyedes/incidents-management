import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { CustomerIncidentsComponent } from './customer-incidents/customer-incidents.component';
import { IncidentUpdatesComponent } from './incident-updates/incident-updates.component';
import { AddIncidentupdatesComponent } from './add-incidentupdates/add-incidentupdates.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentsListComponent,
    CreateIncidentComponent,
    UpdateIncidentComponent,
    IncidentDetailsComponent,
    CustomerIncidentsComponent,
    IncidentUpdatesComponent,
    AddIncidentupdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
