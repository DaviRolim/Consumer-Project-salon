export class Cliente {
constructor(
    public nomeCliente: string,
    public telefone?: string,
    public dataNascimento?: Date,
    public cpf?: string,
    public email?: string,
    public address?: any,
    public idCliente?: number,
    ) {};

    /*
{
	"idCliente": "12",
	"nomeCliente": "Rodolpho Rolim",
	"endereco": "Rua navegantes...",
	"data_nascimento": "2018-04-05",
	"cpf": "213131313",
	"email": "rodolpho@gmail.com",
	"telefone": "839998192918"
}
    */

}