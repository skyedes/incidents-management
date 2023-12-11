import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service';
import { Incident } from '../incident';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrls: ['./update-incident.component.css']
})
export class UpdateIncidentComponent implements OnInit {

  id!: number;
  incident: Incident = new Incident();
  constructor(private incidentService : IncidentService,
    private route : ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.incidentService.getIncidentById(this.id).subscribe(
      data  => this.incident = data,
      error => console.log(error)); 
  }

  onSubmit(){
    this.incidentService.updateIncident(this.id,this.incident).subscribe(() =>{
      this.onSuccess();
    },error=>console.log(error));
  }
  onSuccess(){
    this.router.navigate(['/incidents']);
  }

}
