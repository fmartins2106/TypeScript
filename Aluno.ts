export class Aluno {
    public readonly nome: string;
    public readonly codigo: number;
    public curso: string= "";
    public matricula: boolean = true;
    public readonly notas: number[] = [1,3,5,5];

    constructor(nome: string, codigo: number){
        this.nome = nome;
        this.codigo = codigo;
    }
     verificarMatricula() : void {
        if(this.matricula === true){ /* O operador === é chamado de "estritamente igual" (strict equality). Ele compara valor e tipo. Ou seja, só retorna true se ambos forem exatamente iguais tanto no conteúdo quanto no tipo de dado. */
            console.log(`${this.nome} está com matricula ativa`)
            return;
        }
        console.log(`Encontramos problemas na matricula de ${this.nome}`)
    }

    calcularMedia(){
        if(this.notas.length < 4){
            console.log("Lançar 4 notas para poder calcular a média");
            return;
        }
        let media = 0
        this.notas.forEach(nota => {
            media += nota;   
        });
        
        media = media / this.notas.length;
        
        console.log(`A média final foi:${media.toFixed(2)}`)

        if(media >= 8){
            console.log("Aprovado para o próximo período.");
            return;
        }    
        if(media > 4 && media <= 7.9){
            console.log("Retido em período de exames.");
            return;
        }
        if(media <= 4){
            console.log("Retenação direta.");
        }
    }
    
}

    const aluno1: Aluno = new Aluno('Fernando',2000);
    
    console.log("Nome:"+aluno1.nome+" |Código:"+ aluno1.codigo);


    aluno1.verificarMatricula();

    aluno1.calcularMedia();
