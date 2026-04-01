class carro{
    constructor(marca, idade, quilometragen){
        this.marca = marca;
        this.idade = idade;
        this.quilometragen = quilometragen;
    }
    venda(){
        console.log(`Esse carro é um ${this.marca}, tem so ${this.idade} anos, já rodou ${this.quilometragen} Km.`);
    }
}

let carro1 = new carro("Cadillac",10,137);

carro1.carro();