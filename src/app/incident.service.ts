import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './incident';import { Update } from './update';
import { environment } from 'src/environments/environment';

''

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  //private baseURL = "http://127.0.0.1:8080/api/v1/incidents";
  private baseURL = environment.API_BASE_URL;
  
  constructor(private http: HttpClient) { }

  getIncindents(): Observable<Incident[]>{
    return this.http.get<Incident[]>(this.baseURL);
  }

  createIncident(incident: Incident): Observable<Object>{
    return this.http.post(this.baseURL, incident);
  }

  getIncidentById(id:number) : Observable<Incident>{
    return this.http.get<Incident>(this.baseURL + '/' + id);
   }

   updateIncident(id: number, incident: Incident): Observable<Object>{
    return this.http.put(this.baseURL + '/' + id, incident);
   }

   deleteIncident(id: number): Observable<Object>{
    return this.http.delete(this.baseURL + '/' + id);
   }

   getUpdatesForIncident(incidentId: number): Observable<Update[]> {
    const url = `${this.baseURL}/${incidentId}/updates`;
    return this.http.get<Update[]>(url);
  }

  getIncidentDetails(id: number): Observable<Incident> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Incident>(url);
  }
}
