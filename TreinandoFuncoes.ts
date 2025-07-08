class Treinamento {

    calcularMedia(notas: number[]) : number {
        let soma = 0;
        notas.forEach(nota =>{
            soma += nota;
        });
        return soma / notas.length;
    }

    verificarSituacaoAluno(notas: number[]) : string{
        const media = this.calcularMedia(notas);
        if(media >= 7){
            console.log("Aprovado.");
            return "Aprovado";
        } else if(media >= 5 && media <= 6.9){
            console.log("Em Recuperação.");
            return "Em recuperação";
        } else {
            console.log("Reprovado");
            return "Reprovado";
        }
    }


    calcularMedia2(notas: number[]) : number {
        let soma = 0;
        notas.forEach(nota => {
            soma += nota;
        })
        return soma / notas.length;
    }

    verificarSituacaoAluno2(notas: number[]): string{
        const media = this.calcularMedia2(notas);
        if(media >= 7){
            console.log("Aprovado");
            return "Aprovado.";
        }else if(media >= 5 && media <= 6.9){
            console.log("Em recuperação");
            return "Em recuperação";
        }else {
            console.log("Reprovado.");
            return "Reprovado";
        }
    }

    calcularIdade(anoNascimento: number): number {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        return anoAtual - anoNascimento; 
    }

    calcularMedia3(notas: number[]): number {
        let soma = 0;
        notas.forEach(nota =>{
            soma += nota;
        });
        return soma / notas.length;
    }

    verificarSituacaoAluno3(notas: number[]): string {
        const media = this.calcularMedia3(notas);
        if(media >= 7){
            console.log("Aprovado.");
            return "Aprovado";
        } else if(media >= 5 && media <= 6.9){
            console.log("Em Recuperação.");
            return "Em recuperação.";
        } else {
            console.log("Reprovado");
            return "Reprovado";
        }
    }

    calcularIdadePessoa(dataNascimento: string): number {
        const nascimento = new Date(dataNascimento);
        const hoje = new Date();

        let idade  = hoje.getFullYear() - nascimento.getFullYear();

        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();
        const mesNasc = nascimento.getMonth();
        const diaNasc = nascimento.getDate();

        if(mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)){
            idade--;
        }
        return idade;
    }

    // Método que calcula a idade com base na data de nascimento recebida em formato string
calcularIdadePessoa6(dataNascimento: string): number {
    // Converte a string recebida ("YYYY-MM-DD") em um objeto Date
    const nascimento = new Date(dataNascimento);
    // Cria um objeto Date com a data e hora atual
    const hoje = new Date();
    // Calcula a idade básica subtraindo o ano atual do ano de nascimento
    let idade  = hoje.getFullYear() - nascimento.getFullYear();
    // Obtém o mês atual (de 0 a 11)
    const mesAtual = hoje.getMonth();
    // Obtém o dia atual do mês (de 1 a 31)
    const diaAtual = hoje.getDate();
    // Obtém o mês da data de nascimento (de 0 a 11)
    const mesNasc = nascimento.getMonth();
    // Obtém o dia da data de nascimento (de 1 a 31)
    const diaNasc = nascimento.getDate();
    // Verifica se a pessoa ainda não fez aniversário no ano atual
    // Se o mês atual for menor que o mês de nascimento, ou
    // se for o mesmo mês mas ainda não chegou o dia, então reduz 1 da idade
    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }
    // Retorna a idade final calculada
    return idade;
}

verificaridade4(dataNascimento: string): number{
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade =  hoje.getFullYear() - nascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNasc = nascimento.getMonth();
    const diaNasci = nascimento.getDate();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasci)){
        idade--;
    }
    return idade;
}

verificarSePodeVotar(idade: number): string{
    if(idade < 18){
        return "Sua idade é "+idade+" |Você ainda não pode votar."
    }else {
        return "Sua idade é "+idade+" |Você pode votar."
    }
}









}



