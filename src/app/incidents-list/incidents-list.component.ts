import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  styleUrls: ['./incidents-list.component.css']
})
export class IncidentsListComponent implements OnInit{
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService,
     private router: Router){}

  ngOnInit(): void {
    this.incidentService.getIncindents().subscribe((data) =>{
      this.incidents = data;
    });
  }

  updateIncident(id: number){
    this.router.navigate(['update-incident',id])
  }

  addIncidentUpdate(id: number) {
    this.router.navigate(['add-update',id])
    }

  deleteIncident(id: number){
    this.incidentService.deleteIncident(id).subscribe(() =>{
      this.incidentService.getIncindents().subscribe((data) =>{
        this.incidents = data;
      });
    });
  }


 
}
