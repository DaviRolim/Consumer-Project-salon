import { Http } from '@angular/http';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FinancaService {
  constructor(private http:Http) { }


   findAll() {
    return this.http
    .get('http://localhost:9000/salao/funcionarios/financas')
    .map(res => res.json());
   }

}
