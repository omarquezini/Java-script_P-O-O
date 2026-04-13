class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    expitDeltEl(){
        return`${this.marca}, ${this.modelo}, ${this.ano}`;
    }
}

class Carro extends Automovel{
    constructor (marca, modelo, ano, portas, gasolina, quilometragen){
        super(marca, modelo, ano);
        this.portas = portas;
        this.gasolina = gasolina;
        this.quilometragen = quilometragen;
    }
    expitDeltEl(){
        return`${super.expitDeltEl()}, portas: ${this.portas}, gasolina: ${this.gasolina}, Km: ${this.quilometragen}`;
    }
}

class Moto extends Automovel{
    constructor (marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;

    }
    expitDeltEl(){
        return`${super.expitDeltEl()}, cilindrada: ${this.cilindrada}`;
    }
}

let moto1 = new Moto("suzuki", "GSX-8R", 2027, 776)
console.log(moto1.expitDeltEl)
let carro1 = new Carro("Lincon", "Mark Mark III", 1958, )



