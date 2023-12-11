import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-add-incidentupdates',
  templateUrl: './add-incidentupdates.component.html',
  styleUrls: ['./add-incidentupdates.component.css']
})
export class AddIncidentupdatesComponent {

  updateDescription: string = '';
  updateTime: string = '';
  id: number;

  constructor(private updateService: UpdateService, private route: ActivatedRoute, private router: Router) {
    this.id = +this.route.snapshot.params['id']; // Parse the id as a number
  }

  onSubmit() {
    // Create an object to hold the update data
    const updateData = {
      updateDescription: this.updateDescription,
      updateTime: this.updateTime,
    };

    // Call the update service to add the update
    this.updateService.addUpdateToIncident(this.id, updateData).subscribe(
      (response) => {
        console.log('Update added successfully:', response);
        // Navigate to another page or perform any other actions on success
        this.onSuccess();
      },
      (error) => {
        console.error('Error adding update:', error);
        // Handle the error as needed
      }
    );
  }

  onSuccess() {
    // Example: Redirect to the incident details page
    this.router.navigate(['/incident-updates', this.id]);
  }
}
