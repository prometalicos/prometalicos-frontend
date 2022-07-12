import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
//import { HttpService } from '../../../core/services/http.service';
import { Concession } from '../models/concession.model';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../models/campus.model';

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
    return this.http.get(`${this.baseUrl}/concesion/get`);
  }

  public editConcession(concession: Concession) {
    debugger
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
    debugger
    return this.http.post(`${this.baseUrl}/sede`, campus);
  }

  public editCampus(campus: Campus) {
    return this.http.put(`${this.baseUrl}/sede`, campus)
  }

  public deleteCampus(campus: Campus) {
    debugger
    const httpOptions: { body: { sede_id: string } } = { body: { sede_id: campus.sede_id }};
    return this.http.delete(`${this.baseUrl}/sede`, httpOptions);
  }
}
