import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/users.model';
//import { HttpService } from 'src/app/core/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(protected http: HttpClient) { }

  /* public consultar() {
    const baseUrl = environment.endpoint + '/usuarios';
    return this.http.doGet<User[]>(baseUrl);
  }

  public consultarId(id: string) {
    return this.http.doGet<User>(`${environment.endpoint}/usuarios/` + id, this.http.optsName('consultar agentes'));
  }

  public guardar(usuario: User) {
      return this.http.doPost<User, boolean>(`${environment.endpoint}/usuarios`, usuario);
  }

  public editar(usuario: User, id: string) {
      return this.http.doPut<User, boolean>(`${environment.endpoint}/usuarios/${id}`, usuario);
  }

  public eliminar(id: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/usuarios/${id}`,
      this.http.optsName('eliminar usuario'));
  } */
}
