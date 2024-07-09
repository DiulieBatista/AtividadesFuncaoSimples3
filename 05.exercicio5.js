
const ler = require('readline-sync');

let numero = 0, somapar = 0, contpar = 0, mediapar = 0;

function media () {
    
while (true) {

    let num = ler.questionFloat("Digite um Numero ou 0 Para SAIR: ");
    
    if (num == 0) {
        break;
    }

    if (numero % 2 == 0) {
        somapar += num; 
        contpar++; 
    }
}

if (contpar > 0) {
    mediapar = somapar / contpar;

} else {
    console.log("Nenhum Número PAR foi digitado!");
}
exibir(mediapar)
}

function exibir(mediapar) {
    console.log("A Média dos Números PARES é: " + mediapar.toFixed(2))
}

media();