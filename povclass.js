class pe$$oa{
    constructor(nome, idade,profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log(`Oi. Meu vulgo é ${this.nome}. minha vida foi até aos ${this.idade}, meu trampo é de ${this.profissao} `);
    }
    aniversario(){
        this.idade += 1;
        console.log(`Congruatulaçoes, agora o ${this.nome} tem ${this.idade}.`)
    }
}

let pessoa1 = new pe$$oa ("Wellberton",57,"Cartoonista")
pessoa1.saudar();
pessoa1.aniversario();