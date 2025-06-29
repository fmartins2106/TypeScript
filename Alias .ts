type Input = string | number| string[]; /* no Type pode definir mais de um tipo de variavel para o mesmo parametro.  */

function prompt(input: Input){
}

prompt(2);


interface Dog {
    nome: string;
    raca: string;
    latido(): string;
}

interface Cat {
    nome: string;
    cor: string;
    miado(): string;
}

interface Vaca {
    nome: string;
    peso: string;
    mugido(): string;
}


type Animal = Dog | Cat | Vaca;

function createAnimal(animal: Animal){

}

createAnimal( {
    nome: "Marcelino",
    cor: "Laranja",
    miado(){
        return "miau";
    }

})