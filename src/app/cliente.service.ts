import { Cliente } from './cliente/cliente';
import { Response } from '_debugger';
import { Observer } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ClienteService {

  constructor(private http:Http) { }


   findAll() {
    return this.http
    .get('http://localhost:9000/salao/clientes/')
    .map(res => res.json());
   }

   delete(id) {
    return this.http
    .delete('http://localhost:9000/salao/clientes/'+id)
            .map(res => res.json());
   }

    addCliente(cliente: Cliente) {
    return this.http
    .post('http://localhost:9000/salao/clientes', cliente)
    .map(res => res.json());
  }
}
