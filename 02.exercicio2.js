const ler = require('readline-sync');
let soma=0;
let num=[];

function numeros () {
  

for (let i = 0; i< 18; i++) {
     
    num.push(parseInt(ler.question(`Digite o ${i + 1}º número: `)));
}
for (let i = 0; i < num.length; i++) {
   
    console.log(`valor ${i} :${num[i]}`);
    soma += num[i];
}

while (soma > 500) {
    soma -= 100;
  }

  console.log(`A soma final é: ${soma}`);
}
 numeros();

