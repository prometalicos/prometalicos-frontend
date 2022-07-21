import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubsystemsService {
  private baseUrl = environment.baseUrl();

  constructor(
    private http: HttpClient,
    private socket: Socket) { }

 public getData() {
    return this.socket.fromEvent('dimensionamiento-emit').pipe(map((data) => data));
  }

  public getSizingAll() {
    return this.http.get(`${this.baseUrl}/dimensionamiento_all`);
  }
}
