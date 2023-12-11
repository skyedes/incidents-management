import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {
  incident: Incident = new Incident();
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incidentService: IncidentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params) => {
      const incidentId = this.id; // Get the incident ID from the URL
      this.loadIncidentDetails(incidentId);
    });
  }

  loadIncidentDetails(incidentId: number): void {
    this.incidentService.getIncidentDetails(incidentId).subscribe((incident) => {
      this.incident = incident;
    });
  }

  viewIncidentUpdates(): void {
    if (this.incident) {
      const incidentId = this.incident.id; // Get the incident ID
      this.router.navigate(['/incident-updates', incidentId]); // Navigate to the updates route
    }
  }

}

