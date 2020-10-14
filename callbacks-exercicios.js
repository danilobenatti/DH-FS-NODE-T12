// Exercício: Passando um Callback
function dobro(numero){return numero * 2};
function triplo(numero){return numero * 3};
function aplicar(valor, operacao1){return operacao1(valor)};
console.log(aplicar(2, dobro));
console.log(aplicar(4, triplo));

//-------------------------------
const dobro2 = (numero1) => numero1 * 2;
const triplo2 = (numero1) => numero1 * 3;
const aplicar2 = (valor1, operacao2) => operacao2(valor1);
console.log(aplicar2(2, dobro2));
console.log(aplicar2(4, triplo2));

//-------------------------------
function somar(numeroA, numeroB){
    return numeroA + numeroB;
};
function subtrair(numeroA, numeroB){
    return numeroA - numeroB;
};
function multiplicar(numeroA, numeroB){
    return numeroA * numeroB;
};
function dividir(numeroA, numeroB){
    return numeroA / numeroB;
};

function calculadora(numeroA, numeroB, operacao){
    return operacao(numeroA,numeroB);
};

//-------------------------------
/**
 * let url = "www.google.com";
function adicionarHttp (url){
    return "http://" + url;
};
console.log(adicionarHttp(url));

let listaDeSites = ["www.google.com","www.yahoo.com"];
function processar (listaDeSites, funcao){};

console.log(processar(["google.com","yahoo.com"], adicionarHttp));

let numerosParesDobro = numeroPares.map(function(valor){
    return valor * 2;
});
 */


//-------------------------------
function adicionarHttp1(url) {
    return "http://" + url;
}
function processar1(listaAtual,callback){
    let listaNova = [];
    for ( i = 0; i < listaAtual.length; i++){
        listaNova.push(callback(listaAtual[i]));
    }
    return listaNova;
}
console.log(processar1(["google1.com","yahoo1.com"],adicionarHttp1));

//-------------------------------
function adicionarHttp(url) {
    return "http://" + url;
}
function processar(listaAtual,callback){
    let listaNova = [];
    listaAtual.forEach(element => {
        listaNova.push(callback(element));
    });
    return listaNova;
}
console.log(processar(["google2.com","yahoo2.com"],adicionarHttp))