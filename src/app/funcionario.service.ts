import { Response } from '_debugger';
import { Observer } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Funcionario } from './funcionario/Funcionario';

@Injectable()
export class FuncionarioService {

  constructor(private http:Http) { }


   findAll() {
    return this.http
    .get('http://localhost:9000/salao/funcionarios/')
    .map(res => res.json());
   }

   delete(id) {
    return this.http
    .delete('http://localhost:9000/salao/funcionarios/'+id)
            .map(res => res.json());
   }

    addCliente(funcionario: Funcionario) {
    return this.http
    .post('http://localhost:9000/salao/funcionarios', funcionario)
    .map(res => res.json());
  }

}
