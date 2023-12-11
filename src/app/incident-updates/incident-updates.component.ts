import { Component, OnInit } from '@angular/core';
import { Update } from '../update';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../update.service';
import { Incident } from '../incident';

@Component({
  selector: 'app-incident-updates',
  templateUrl: './incident-updates.component.html',
  styleUrls: ['./incident-updates.component.css']
})
export class IncidentUpdatesComponent implements OnInit {
  id!: number;
  incident: Incident = new Incident();
  updates: Update[] = [];

  constructor(
    private route: ActivatedRoute,
    private updateService: UpdateService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params) => {
      const incidentId = this.id; // Get the incident ID from the URL
      this.loadIncidentUpdates(incidentId);
    });
  }

  loadIncidentUpdates(incidentId: number): void {
    this.updateService.getUpdatesForIncident(incidentId).subscribe((updates) => {
      this.updates = updates;
    });
  }

}
