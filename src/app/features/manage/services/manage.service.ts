import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
//import { HttpService } from '../../../core/services/http.service';
import { Concession } from '../models/concession.model';
import { HttpClient } from '@angular/common/http';

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
    return this.http.put(`${this.baseUrl}/concesion/update`, concession)
  }

  public deleteConcession(concession: Concession) {
    const httpOptions: { body: { concesion_id: string } } = { body: { concesion_id: concession.concesion_id }};
    return this.http.delete(`${this.baseUrl}/concesion/delete`, httpOptions);
  }
}
