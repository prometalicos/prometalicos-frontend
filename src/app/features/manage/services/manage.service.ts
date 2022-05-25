import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../core/services/http.service';
import { Concession } from '../models/concession.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private baseUrl = environment.baseUrl();

  constructor(private http: HttpService) { }

  public addConcession(concession: Concession) {
    return this.http.doPost(`${this.baseUrl}/concesion`, concession)
  }
}
