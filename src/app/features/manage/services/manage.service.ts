import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
//import { HttpService } from '../../../core/services/http.service';
import { Concession } from '../models/concession.model';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../models/campus.model';
import { Subsystem } from '../models/subsystem.model';
import { Observable } from 'rxjs';
import { SubsystemCreateComponent } from '../subsystem/components/subsystem-create/subsystem-create.component';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private baseUrl = environment.baseUrl();

  constructor(private http: HttpClient) { }

  public addConcession(concession: Concession) {
    
    return this.http.post(`${this.baseUrl}/concesion`, concession);
  }

  public getConcessions() {
    console.log(this.http.get(`${this.baseUrl}/concesion/get`))
    return this.http.get(`${this.baseUrl}/concesion/get`);
  }

  public editConcession(concession: Concession) {
    
    return this.http.put(`${this.baseUrl}/concesion`, concession)
    
  }

  public deleteConcession(concession: Concession) {
    const httpOptions: { body: { concesion_id: string } } = { body: { concesion_id: concession.concesion_id }};
    return this.http.delete(`${this.baseUrl}/concesion`, httpOptions);
  }

  public getCampus() {
    return this.http.get(`${this.baseUrl}/sede/get`);
  }

  public addCampus(campus: Campus) {
    
    return this.http.post(`${this.baseUrl}/sede`, campus);
  }

  public editCampus(campus: Campus) {
    return this.http.put(`${this.baseUrl}/sede`, campus)
  }

  public deleteCampus(campus: Campus) {
    
    const httpOptions: { body: { sede_id: string } } = { body: { sede_id: campus.sede_id }};
    return this.http.delete(`${this.baseUrl}/sede`, httpOptions);
  }

  public getSubsystem() {
    //return this.http.get(`${this.baseUrl}/subsystem/get`);
  }

  public addSubsystem(subsystem: Subsystem) {
    
    return this.http.post(`${this.baseUrl}/subsystem`, subsystem);
  }

  public editSubsystem(subsystem: Subsystem) {
    return this.http.put(`${this.baseUrl}/subsystem`, subsystem)
  }

  public deleteSubsystem(subsystem: Subsystem) {
    
    const httpOptions: { body: { subsystem_id: string } } = { body: { subsystem_id: subsystem.sede_id }};
    return this.http.delete(`${this.baseUrl}/subsystem`, httpOptions);
  }
}
