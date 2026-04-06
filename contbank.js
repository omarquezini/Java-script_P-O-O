class contaBancaria$$$ {

    #saldo = 0

    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`deposito de ${valor} feito`);
        }
    }

    saque(valor){
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito.`);
        }

        else
            console.log(`Tu tá duro amigo, sinto em le diser mas tu tem ${valor} na conta.`);
    }
    estrato(){
        return`seu saldo é ${this.#saldo}`;
    }

    
}

const conta1 = new contaBancaria$$$("Parlamento socio-democratico");

conta1.depositar(1000);
conta1.saque();
console.log(conta1.estrato());