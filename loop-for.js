for (let i = 0; i <= 4; i++) {
    console.log('Oi! ' + i);
}

/**
 * Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte 
 * um for que conte de 0 até um número. A função deverá retornar a 
 * quantidade de números impares que foram encontrados até chegar ao número.
 */
function naoPareDeContarImparesAte(numero) {
    let contador = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 2 != 0) {
            contador++;
            console.log(i);
        }      
    }
    return contador;
}
console.log('('+naoPareDeContarImparesAte(20).toString()+'x)');