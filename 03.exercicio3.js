const ler = require('readline-sync');
let fatorial = 1;
let soma = 0;
let i = 1;
let n = 0;

function usuario() {
    n = ler.questionFloat("Digite a quantidade de números a serem lidos: ");
    calcular(n);
}

function calcular(n) {
    while (i <= n) {
        let numero = ler.questionFloat(`Digite o número ${i}: `);
        soma += numero;
        fatorial *= i;
        i++;
    }

    exibir(soma, n, fatorial);
}

function exibir(soma, n, fatorial) {
    console.log("Os números digitados foram:");
    console.log("Soma dos números: " + soma);
    console.log(`Fatorial de ${n}: ${fatorial}`);
}

usuario();
