import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
//import { HttpService } from '../../../core/services/http.service';
import { Concession } from '../models/concession.model';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../models/campus.model';
import { Subsystem } from '../models/subsystem.model';
import { Periferic_type } from '../models/periferic_type.model';
import { Periferic } from '../models/periferic.model';
import { Port_card } from '../models/port_card.model';
import { Permission } from '../models/permission.model';
import { Role } from '../models/role.model';
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
    return this.http.get(`${this.baseUrl}/sub_sistema/get`);
  }

  public addSubsystem(subsystem: Subsystem) {
    
    return this.http.post(`${this.baseUrl}/sub_sistema`, subsystem);
  }

  public editSubsystem(subsystem: Subsystem) {
   
    return this.http.put(`${this.baseUrl}/sub_sistema`, subsystem)
  }

  public deleteSubsystem(subsystem: Subsystem) {
    const httpOptions: { body: { sub_sistema_id: string } } = { body: { sub_sistema_id: subsystem.sub_sistema_id }};
    return this.http.delete(`${this.baseUrl}/sub_sistema`, httpOptions);
  }

  public getPeriferic_type() {
    return this.http.get(`${this.baseUrl}/tipo_periferico/get`);
  }

  public addPeriferic_type(periferic_type: Periferic_type) {
    
    return this.http.post(`${this.baseUrl}/tipo_periferico`, periferic_type);
  }

  public editPeriferic_type(periferic_type: Periferic_type) {
    return this.http.put(`${this.baseUrl}/tipo_periferico`, periferic_type)
  }

  public deletePeriferic_type(periferic_type: Periferic_type) {
    
    const httpOptions: { body: { tipo_periferico_id: string } } = { body: { tipo_periferico_id: periferic_type.tipo_periferico_id }};
    var respuesta = this.http.delete(`${this.baseUrl}/tipo_periferico`, httpOptions);

    return respuesta;
    
  }

  public getPeriferic() {
    return this.http.get(`${this.baseUrl}/periferico/get`);
  }

  public addPeriferic(periferic: Periferic) {
    
    return this.http.post(`${this.baseUrl}/periferico`, periferic);
  }

  public editPeriferic(periferic: Periferic) {
    return this.http.put(`${this.baseUrl}/periferico`, periferic)
  }

  public deletePeriferic(periferic: Periferic) {
    
    const httpOptions: { body: { periferico_id: string } } = { body: { periferico_id: periferic.periferico_id }};
    return this.http.delete(`${this.baseUrl}/periferico`, httpOptions);
  }

  public getPort_card() {
    let respuesta = this.http.get(`${this.baseUrl}/tarjeta_puertos/get`);
    
    return respuesta;
    
  }

  public addPort_card(port_card: Port_card) {
    
    return this.http.post(`${this.baseUrl}/tarjeta_puertos`, port_card);
  }

  public editPort_card(port_card: Port_card) {
    return this.http.put(`${this.baseUrl}/tarjeta_puertos`, port_card)
  }

  public deletePort_card(port_card: Port_card) {
    
    const httpOptions: { body: { tarjeta_puertos_id: string } } = { body: { tarjeta_puertos_id: port_card.tarjeta_puertos_id }};
    return this.http.delete(`${this.baseUrl}/tarjeta_puertos`, httpOptions);
  }

  public getPermission() {
    let respuesta = this.http.get(`${this.baseUrl}/permiso/get`);
    
    return respuesta;
    
  }

  public addPermission(permission: Permission) {
    
    return this.http.post(`${this.baseUrl}/permiso`, permission);
  }

  public editPermission(permission: Permission) {
    return this.http.put(`${this.baseUrl}/permiso`, permission)
  }

  public deletePermission(permission: Permission) {
    
    const httpOptions: { body: { permiso_id: string } } = { body: { permiso_id: permission.permiso_id }};
    return this.http.delete(`${this.baseUrl}/permiso`, httpOptions);
  }

  public getRole() {
    let respuesta = this.http.get(`${this.baseUrl}/rol/get`);
    
    return respuesta;
    
    
  }

  public addRole(role: Role) {
    
    return this.http.post(`${this.baseUrl}/rol`, role);
  }

  public editRole(role: Role) {
    return this.http.put(`${this.baseUrl}/rol`, role)
  }

  public deleteRole(role: Role) {
    
    const httpOptions: { body: { rol_id: string } } = { body: { rol_id: role.rol_id }};
    return this.http.delete(`${this.baseUrl}/rol`, httpOptions);
  }
}
