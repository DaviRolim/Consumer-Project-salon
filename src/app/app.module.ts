import { FinancaService } from './financa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FuncionarioService } from './funcionario.service';
import { ServicoService } from './servico.service';
import { AtendimentoService } from './atendimento.service';
import { AppComponent } from './app.component';
import { ClienteService } from './cliente.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ClienteComponent } from './cliente/cliente.component';
import {routing} from './app.routing';
import { ServicosComponent } from './servicos/servicos.component';
import { FinancasComponent } from './financas/financas.component';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js';
import { TextMaskModule } from 'angular2-text-mask';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ClienteComponent,
    ServicosComponent,
    FinancasComponent,
    ServicosComponent,
    AtendimentoComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TextMaskModule
  ],
  providers: [ClienteService, ServicoService, AtendimentoService, FuncionarioService, FinancaService, {
    provide: LOCALE_ID,
    useValue: 'pt-BR' 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
