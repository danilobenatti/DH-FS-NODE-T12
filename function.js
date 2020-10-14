function dobro(umNumero) {
    return umNumero * 2;
}
console.log(dobro(5));
/**
 * Contexto global e local.
 */
let numeroGlobal = 32; // contexto global

// Modo Declarativo
function somar(a,b) {
    // código
    let numeroLocal = 23; // contexto local
    console.log(numeroGlobal);
    console.log(numeroLocal);
    console.log("Estou somando...");
    return (a + b); // return encerra a função
}
// console.log(numeroLocal); <-- gera um erro!
console.log(somar(1,2));

// Modo Expressão
const multiplicar = function(a,b) {
    // código
    let numeroLocal = 21;
    console.log(numeroGlobal);
    console.log(numeroLocal);
    console.log("Estou multiplicando...");
    return (a * b); // return encerra a função
}
console.log(multiplicar(2,3));