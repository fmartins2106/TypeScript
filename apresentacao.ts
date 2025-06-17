const nome : string = "Fernando Martins";
const codigo : number = 2;
const estudando : boolean = true;
const mesCodigo : number = 2;
let mesDesc : string;
console.log(`Olá meu nome é ${nome}`);
console.log(`Código de matrícula: ${codigo}`);
/* if (estudando == true){
    console.log(`Atualmente, estudo no SuperDev? Verdadeiro`)
}else {
    console.log(`Atualmente, estudo no SuperDev? Falso`)
} */
console.log(`Atualmente, estudo no SuperDev° ${estudando == true} ? 'Verdadeiro' : 'Falso'`);
switch(mesCodigo){
    case 1:
        mesDesc = "Janeiro";
        break;
    case 2:
        mesDesc = "Fevereiro";
        break;
    case 3:
        mesDesc = "Março";
        break;
    case 4:
        mesDesc = "Abril";
        break;
    case 5:
        mesDesc = "Maio";
        break;
    case 6:
        mesDesc = "Julho";
        break;
    case 7:
        mesDesc = "Julho";
        break;
    case 8:
        mesDesc = "Agosto";
        break;
    case 9:
        mesDesc = "Setembro";
        break;
    case 10:
        mesDesc = "Outurbro";
        break;
    case 11:
        mesDesc = "Novembro";
        break;
    case 12:
        mesDesc = "Dezembro";
        break;
    default:
        console.log(`Erro. Digite uma opção válida.`);
}
console.log(`Sabendo que estou no mês ${mesCodigo}, digo que é ${mesCodigo}`)

