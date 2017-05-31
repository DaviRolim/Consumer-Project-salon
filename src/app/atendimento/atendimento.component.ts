import { Servicos } from './../servicos/servicos';
import { Funcionario } from './../funcionario/Funcionario';
import { Cliente } from './../cliente/cliente';
import { Atendimento } from './atendimento';
import { FuncionarioService } from './../funcionario.service';
import { ServicoService } from './../servico.service';
import { ClienteService } from './../cliente.service';
import { AtendimentoService } from './../atendimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  lclientes: Cliente[] = [];
  lfuncionarios: Funcionario[] = [];
  lservicos: Servicos[] = [];
  latendimentos: Atendimento[] = [];

  modcliente: Cliente = new Cliente('', '', new Date(), '', '', '', null);
  modfuncionario: Funcionario = new Funcionario('', '', new Date(), '', '', '', '', null);
  modservico: Servicos = new Servicos('', null, null, null);
  // modatendimento: Atendimento = new Atendimento(this.modcliente, this.modservico, this.modfuncionario, new Date(), null);

  constructor(private atendimentoService: AtendimentoService,
              private clienteService: ClienteService,
              private servicoService: ServicoService,
              private funcionarioService: FuncionarioService) { }

  ngOnInit() {
   this.findAll();
  }

  findAllClientes (){
    this.clienteService.findAll()
    .subscribe(clientes => this.lclientes = clientes);
    console.log(this.lclientes);
  }

  findAllServicos () {
     this.servicoService.findAll()
    .subscribe(servicos => this.lservicos = servicos);
    console.log(this.lservicos);
  }

  findAllFuncionarios () {
    this.funcionarioService.findAll()
    .subscribe(funcionarios => this.lfuncionarios = funcionarios);
    console.log(this.lfuncionarios);
  }

  findAllAtendimentos(){
    this.atendimentoService.findAll()
    .subscribe(atendimentos => this.latendimentos = atendimentos);
    console.log(this.latendimentos);
  }

  findAll() {
    this.findAllClientes();
    this.findAllFuncionarios();
    this.findAllServicos();
    this.findAllAtendimentos();
  }

  postAtendimento(){

  var  modatendimento: Atendimento = new Atendimento(this.modcliente, this.modservico, this.modfuncionario, new Date(), null);
    var d = new Date();
    d.setMinutes( d.getMinutes() + d.getTimezoneOffset() );
    modatendimento.data_atendimento = new Date(d);
    console.log(modatendimento);
    this.atendimentoService.addAtendimento(modatendimento)
    .subscribe(cli => {this.findAll()});
  }



}
