import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Rx';
import 'rxjs/Rx';

import { ClienteService } from './../cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit, OnDestroy {

  sub: Subscription;
  lclientes: Cliente[] = [];
  filtro: any = '';
  showForm = false;

  model: Cliente = new Cliente('', '', new Date(), '', '', '', null);
  celularmask = ['(', /[1-9]/, /\d/,  ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfmask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  datamask = [/\d/, /\d/, '/', /\d/, /\d/, '/',  /\d/,  /\d/,  /\d/,  /\d/];

  constructor(private clienteService: ClienteService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.sub = this.clienteService.findAll()
    .subscribe(clientes => this.lclientes = clientes);
    console.log(this.lclientes);
  }


  delete (id) {
    this.clienteService.delete(id)
    .subscribe(data => {
      this.findAll();
  });
  }
   filterClient() {
    if (this.lclientes.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.lclientes;
    }
    return this.lclientes.filter((v) => {
      if (v.nomeCliente.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  formulario() {
    this.showForm = !this.showForm;
  }

  postcliente() {
    var d = new Date(this.model.dataNascimento)
    d.setMinutes( d.getMinutes() + d.getTimezoneOffset() );
    this.model.dataNascimento = new Date(d);
    this.clienteService.addCliente(this.model)
    .subscribe(cli => {this.findAll()});
    this.showForm = !this.showForm;
  }


    ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
