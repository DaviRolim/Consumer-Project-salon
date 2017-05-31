import { FuncionarioValor } from './FuncionarioValor';
import { Subscription } from 'rxjs/Rx';
import { FinancaService } from './../financa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {

  lfuncval: FuncionarioValor[] = [];

  constructor(private financaService: FinancaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.financaService.findAll()
    .subscribe(func => {
      this.lfuncval = func;
      console.log(this.lfuncval);
    });
  }

}
