/* Em um hospital precisa controlar o monituramento do paciente, para isso é necesario que o sistema forneça funções capazes e auxiliar nesse process.
inicialmente deve conter:
- função para apresentar as informações iniciais do monitor
- função para retornar o nível ideal de oxigênio
-função par aretornar o nível indeial de batimentos cardíacos
 */

function nivelOxigencio(): Number {
    return 100;
}

function nivelBatiamento(): Number {
    return 75;
}

function inforMonitor(): void{
    console.log("==========================");
    console.log("Hospital Santa Catarina");
    console.log("==========================");
    console.log("Seja bem vido !");
    console.log("____________________________")
}

/* ____________________________________________________________________ */

function dadosPaciente(nvlOxigenio: number, nvlBatimentos: number) : void {
    console.log("==========Dados do paciente==========");
    console.log("Código: 1");
    console.log("Nome: Fernando");
    console.log("Sobrenome: Martins");
    console.log("Nível oxigênio:"+nvlOxigenio);
    console.log("Nível de batimento:"+nvlBatimentos);
    console.log("Dias internados:8");
    console.log("=====================================");
}

function nivelIdealOxigenio(oxigenio ?: number) : void {
    if(oxigenio === undefined){
        console.log("Nenhum valor informado.");
        return;
    }
    if(oxigenio > 100){
        console.log("Oxigência está dentro dos padões de normalidade.");
        return;
    }
    console.log("Alerta ! Nível de oxigênio está em um nível elevado. Converse com seu médico.");
}

function nivelIdealBatimento(batimento ?: number) : void {
    if(batimento === undefined){
        console.log("Nenhum valor informado.");
        return;
    }
    if(batimento > 95){
        console.log("Nível de batimento está dentro dos padrões de normalidade");
        return;
    }
    console.log("Alerta! Batimento cardiaco está com nível elevado. Procure um médico.");
}

/* Executando as funções no sistema */


