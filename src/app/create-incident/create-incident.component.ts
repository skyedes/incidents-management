import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { IncidentService } from '../incident.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit{

  incident:Incident = new Incident();
  constructor(private incidentService: IncidentService, private router: Router){}

  ngOnInit(): void {
  }

  saveIncident(){
    this.incidentService.createIncident(this.incident).subscribe(data =>{
      console.log(data);
      this.onSuccess();
    },
    error =>console.log(console.error));
  }
  onSuccess(){
    this.router.navigate(['/incidents']);
  }
  onSubmit(){
    console.log(this.incident);
    this.saveIncident();
    
  }

}
