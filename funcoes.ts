/* Função sem retorno */
function dizerOla(): void {
    console.log("Ola mundo !!!");
}

/* Função com retorno (Observar o tipo de dado a ser retornado) */
function obterMes11(): string {
    return 'Novembro';
}

/* Otra função sem retorno */
function mostrarNome(nome : string) : void {
    console.log("Olá, meu nome é, "+nome);
}

/* Outra função com retorno */
function somar(a: number, b: number) : number {
    return a + b;
}


/* Parâmetros Opcional */
function boasVidas( escola ?: string) : void {
    if (escola){
        console.log("Bem vindo a", escola);
        return;
    }
    console.log("Bem vindo!");
}

/* Função com retorno e com parâmetro defaut */
function evelarNum(num : number, potencia : number = 2): number {
    return num ** potencia;
}


/* Chamando a função _________*/
dizerOla();

const mes : string = obterMes11();
console.log(mes);

mostrarNome("Fernando Martins");
const somandoNumeros : number = somar(1,1);
console.log("A soma é:"+somandoNumeros);

boasVidas("Proway");
boasVidas();


const resultadoPotencia1 = evelarNum(10,3);
const resultadoPotencia2 = evelarNum(10);

console.log(resultadoPotencia1);
console.log(resultadoPotencia2);

/* ___________________________ */







