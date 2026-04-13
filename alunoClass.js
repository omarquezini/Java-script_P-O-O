class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calMad() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
}

let Aluno1 = new Aluno("Dr.Rick", 5050, [2.4, 10.0, 5.7]);
console.log(Aluno1.calMad());

