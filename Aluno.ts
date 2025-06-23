export class Aluno {
    public readonly nome: string;
    public readonly codigo: number;
    public curso: string= "";
    public matricula: boolean = true;
    public readonly notas: number[] = [];

    constructor(nome: string, codigo: number){
        this.nome = nome;
        this.codigo = codigo;
    }

}


    const aluno1: Aluno = new Aluno('Fernando',2000);
    
    console.log("Nome:"+aluno1.nome+" |Código:"+ aluno1.codigo);