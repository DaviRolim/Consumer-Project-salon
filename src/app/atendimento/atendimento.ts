import { Funcionario } from './../funcionario/Funcionario';
import { Cliente } from './../cliente/cliente';
import { Servicos } from './../servicos/servicos';
export class Atendimento {
constructor(
    public cliente: Cliente,
    public servicos: Servicos,
    public funcionario: Funcionario,
    public data_atendimento: Date,
    public cd_atendimento: number
    ) {};
}