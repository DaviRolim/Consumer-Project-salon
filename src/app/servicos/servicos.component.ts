import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Servicos } from './servicos';
import { ServicoService } from './../servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit, OnDestroy {

 sub: Subscription;
  lservicos: Servicos[] = [];
  filtro: any = '';
  showForm = false;

  model: Servicos = new Servicos('', null, null, null);
  comissaomask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private servicoService: ServicoService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.sub = this.servicoService.findAll()
    .subscribe(servicos => this.lservicos = servicos);
    console.log(this.lservicos);
  }


  delete (id) {
    this.servicoService.delete(id)
    .subscribe(data => {
      this.findAll();
  });
  }
   filterServico() {
    if (this.lservicos.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.lservicos;
    }
    return this.lservicos.filter((v) => {
      if (v.nomeServico.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  formulario() {
    this.showForm = !this.showForm;
  }

  postServico() {
    this.servicoService.addServico(this.model)
    .subscribe(cli => {this.findAll()});
    this.showForm = !this.showForm;
  }


    ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

