const ler = require('readline-sync');

let soma = 0;
function Negativos() {
    

while (true) {

    let num = ler.questionInt("Digite um Numero Inteiro ou 0 para SAIR: ");
    
    if (num === 0) {
        break; 
    }

    if (num < 0) {
        soma += num; 
    }

}
    exibir( soma)

}


function exibir( soma) {
    console.log("O Somatório dos Números Negativos é: " + soma);
}

Negativos();


