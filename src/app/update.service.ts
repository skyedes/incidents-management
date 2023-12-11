import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './incident';import { Update } from './update';
import { environment } from 'src/environments/environment';
''

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private baseURL = environment.API_BASE_URL;
  
  constructor(private http: HttpClient) { }

  getUpdatesForIncident(id: number) : Observable<Update[]> {
    return this.http.get<Update[]>(this.baseURL + '/' + id + '/updates');
   }

   addUpdateToIncident(incidentId: number, updateData: any): Observable<Update> {
    const url = `${this.baseURL}/${incidentId}/updates`;
    return this.http.post<Update>(url, updateData);
  }

}
