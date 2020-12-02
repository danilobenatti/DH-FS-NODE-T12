// ------------------------------
const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 20, somar)) // importante ao passar a função somar sem adicionar ().

console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA - numeroB))

/**
 * A primeira função se chamará dobro que receberá um número e retornará o dobro.

A segunda função se chamará triplo que recebera um número e retornará o triplo.

A terceira função será chamada de aplicar e receberá um valor e o nome de uma função como parâmetro. Ela retornará o valor da aplicação da referida função ao valor recebido.

Exemplo:

aplicar(2, dobro); // 4
aplicar(4, triplo); // 12
 */

const dobro = numero => numero * 2;
const triplo = numero => numero * 3;
const aplicar = (numero, operacao) => operacao(numero);
console.log(aplicar(10, dobro));
console.log(aplicar(20, triplo));

// Exercício complementar
function nomeCompleto(nome, sobrenome){
    return nome[0] + sobrenome[0];
};

function saudar(nome, sobrenome, callback){
    return "Olá " + callback(nome, sobrenome) + "!";
};
let retorno = saudar("João", "Neves", nomeCompleto)
console.log(retorno);

// Operações matemática
let operacaoMatematica = (n1,n2, operacao) => operacao(n1,n2);
console.log(operacaoMatematica(2,3,somar));
console.log(operacaoMatematica(2,dobro));