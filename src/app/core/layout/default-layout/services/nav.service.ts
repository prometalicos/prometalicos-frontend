import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private baseUrl = environment.baseUrl();
  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpService) { }

  public getMenu() {
    const body = {id: 1};
    return this.http.doPost(`${this.baseUrl}/user/get_menu`, body, { headers: this.headers });  
  }
}

