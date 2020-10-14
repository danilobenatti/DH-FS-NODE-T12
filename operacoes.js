// Operador de adição(+)
console.log( "Adição(2 + 2) = " + (2 + 2));
// Operador de subtração(-)
console.log( "Subtração(2 - 2) = " + (2 - 2));
// Operador de multiplicação(*)
console.log( "Multiplicação(2 * 2) = " + (2 * 2));
// Operador de divisão(/)
console.log( "Divisão(2 / 2) = " + (2 / 2));
// Operador de módulo(%)
console.log( "Módulo(3 % 2) = " + (3 % 2));
// ------------------------------
let numero = 2;
// Operador de incremento(++)
console.log(numero++);
numero = numero++;
console.log(numero);
// Operador de decremento(--)
console.log(numero--);
numero = numero--;
console.log(numero);
// ------------------------------
numero = 10;
// Operador de incremento(++)
console.log(++numero);
// Operador de decremento(--)
console.log(--numero);
// ------------------------------
/**
 * Operadores de comparação
 */
console.log('1-) '+ (10 > 5) );
console.log('2-) '+ (10 < 5) );
console.log('3-) '+ (3 <= 2) );
console.log('4-) '+ (3 >= 3) );
console.log('5-) '+ (3 == 2) );
console.log('6-) '+ ('3' == 3));
console.log('7-) '+ ('3' === 3)); // comparação de igualdade rígido
console.log('8-) '+ (3 != 2) );
console.log('9-) '+ ('Olá!' == 'ola!'));
console.log('10-) '+ ('Olá!' !== 'ola!'));
console.log('11-) '+ ('10' !== 10));
/**
 * Operadores Lógicos (&& "AND" - || "OR" - ! "NOT{negação}")
 **/
console.log( 10 > 5 && 8 > 10 );
console.log( 10 > 5 || 8 > 10 );
console.log( 10 > 5 && 8 >! 10 );
console.log( !(10 > 20) );
/**
 * Operador de concatenação (+).
 */
let nome = "João", sobrenome = "Oliveira";
console.log(nome + ' ' + sobrenome);