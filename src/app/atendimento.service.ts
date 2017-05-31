import { Atendimento } from './atendimento/atendimento';
import { Response } from '_debugger';
import { Observer } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AtendimentoService {

    constructor(private http:Http) { }


   findAll() {
    return this.http
    .get('http://localhost:9000/salao/atendimentos/')
    .map(res => res.json());
   }

   delete(id) {
    return this.http
    .delete('http://localhost:9000/salao/atendimentos/'+id)
            .map(res => res.json());
   }

    addAtendimento(atendimento: Atendimento) {
    return this.http
    .post('http://localhost:9000/salao/atendimentos', atendimento)
    .map(res => res.json());
  }


}
