export class Funcionario {
constructor(
    public nomeFuncionario: string,
    public telefone?: string,
    public dataNascimento?: Date,
    public cpf?: string,
    public cargo?: string,
    public email?: string,
    public endereco?: any,
    public idFuncionario?: number,
    ) {};
}