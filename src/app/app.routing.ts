import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AtendimentoComponent } from './atendimento/atendimento.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FinancasComponent } from './financas/financas.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ClienteComponent } from './cliente/cliente.component';

// import dos components

const appRoutes: Routes = [
	{ path: '', component: HomeComponentComponent },
	{ path: 'cliente', component: ClienteComponent },
	{ path: 'servicos', component: ServicosComponent },
	{ path: 'atendimentos', component: AtendimentoComponent },
	{ path: 'financas', component: FinancasComponent }
	// { path: 'caminhourl', component: componentdessaUrl }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);