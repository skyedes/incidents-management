import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';
import { Router } from '@angular/router';
import { Update } from '../update';

@Component({
  selector: 'app-customer-incidents',
  templateUrl: './customer-incidents.component.html',
  styleUrls: ['./customer-incidents.component.css']
})
export class CustomerIncidentsComponent implements OnInit {
  incidents: Incident[] = []; 
  selectedIncidentUpdates: Update[] = [];

  constructor(private incidentService: IncidentService, private router: Router){}
  
  ngOnInit(): void {
    this.incidentService.getIncindents().subscribe((data) =>{
      this.incidents = data;
    });
  }

  viewIncidentUpdates(id: number){
    this.router.navigate(['incident-details',id])
  }

  /*viewIncidentUpdates(id: number) {
    //this.router.navigate(['updates',id])
    this.incidentService.getUpdatesForIncident(id)
      .subscribe((updates: Update[]) => {
        // Update your component property to hold the updates
        this.selectedIncidentUpdates = updates;
      });

    }*/

}
