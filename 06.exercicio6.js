const alt1jorge = 1.72;
const alt1roberto = 1.65;

const crescjorge = 3; 
const crescroberto = 4; 

const crescmetrojorge = crescjorge / 100; 
const crescmetroroberto = crescroberto / 100; 

let anos = 0;

let alturajorge = alt1jorge;
let alturaroberto = alt1roberto;
function anosCrescimento() {
    


while (alturaroberto <= alturajorge) {
    alturajorge += crescmetrojorge;
    alturaroberto += crescmetroroberto;
    anos++;
}
exibir(anos);

}

function exibir(anos) {
    

console.log("Serão necessários - " + anos + " - anos para que Roberto seja maior que Jorge.");

}

anosCrescimento();

