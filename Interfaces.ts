interface UserWallet {
    coins?: number;
    credits?: number;
}


interface User {
    nome: string;
    createdAt: Date,
    wallet?:{
        coins?: number;
        credits?: number;
    }
}

function createUser(nome: string): User{
    return  {nome,createdAt: new Date()}
}

const Fernando = createUser("Fernando")

function updateWallet(user: User, wallet: UserWallet){
    user.wallet = {...user.wallet,...wallet}
}


updateWallet(Fernando,{coins:22})

/* implementando interface*/

interface Admin extends User {
    ban(user:User): void;
    kick(user:User): void;
}

function promoteUser(user: User): Admin {
    return {
        ...user, /* 	Copia todas as propriedades do objeto  */
        ban(user) {
            console.log(user,"Foi banido por",this.nome);
        },
        kick(user) {
            console.log(user,"foi expulso por",this.nome);
        },
    }
}

