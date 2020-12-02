let contador = 0;

while (contador < 10) {
    contador++;
    console.log('Estou dentro de um while: ' + contador);
}

contador = 0;
do { // executa pelo menos uma vez.
    contador++;
    console.log('Estou dentro de um do-while: ' + contador);
} while (contador > 10);

/**
 * Para este exercício, fornecemos a função de contagem já declarada.
 * Esta função receberá dois parâmetros numéricos. Queremos que a 
 * função vá do primeiro parâmetro para o segundo e imprima o texto 
 * pelo console "O número atual é__ e é menor que__".
 * Por exemplo, se passarmos os números 4 e 6, veremos algo assim:
 *  "O número atual é 4 e é menor que 6"
 *  "O número atual é 5 e é menor que 6"
 */
function count(inicio,fim) {
    if (inicio < fim) {
        while (inicio < fim) {
            console.log("O número atual é "+ inicio +" e é menor que "+ fim);
            inicio++;
        }
    }
};
console.log(count(4,6));

/**
 * Queremos construir uma função que receba um array de números como 
 * parâmetro. A função deve passar por esse array e imprimir cada um 
 * dos números pelo console. Se você encontrar um 5, deverá parar a 
 * execução e imprimir com console o texto "Encontramos um 5!". 
 * Para resolver este exercício, você DEVE usar o do-while.
 */
function encontreUm5(numeros) {
    let index = 0;
    do {
        console.log(numeros[index]);
        index++;
        if (numeros[index] == 5) {
            console.log('Encontrei um 5!');
        }
    } while (numeros[index] != 5);
}
encontreUm5([1,6,3,9,10,5,2,3]);