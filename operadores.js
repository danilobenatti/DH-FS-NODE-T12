// Atribuição "=" e Operações aritméticas
var idade = 35;
var soma = 10 + 15;
var subtracao = 10 -15;
var multiplicacao = 10 * 15;
var divisao = 15 / 10;

// Aritméticos incremento
var incremento = 15++;
var decremento = 15--;

// Operador de módulo retorna o resto de uma divisão
var modulo = 15 % 5; // retorna 0
modulo = 15 % 2; // retorna 1

// Operadores de comparação simples
// Compara doi valores, retornando "true" ou "false"
var igualdade = 10 == 15; // retorna "false"
var desigualdade = 10 != 15; // retorna "true"
// Comparação estrita (compara valor E tipo de dado).
var igualdadeEstrita = 10 === "10"; // retorna "false"
var desigualdadeEstrita = 10 !== 15; // retorna "true"

// Operadores de comparação maioridade e menoridade
// sempre retornam um booleano
var maior = 15 > 15 // maior que, retorna "false"
var maiorIgual = 15 >= 15 // maior ou igual que, retorna "true"
var menor = 10 < 15 // menor que, retorna "true"
var menorIgual = 10 <= 15 // menor ou igual que, retorna "true"

// Operações Lógicas
// Permitem combinar valores booleanos, e o resultado também
// sempre retorna um booleano "true" ou "false".
// Exitem três operadores: E(and), OU(or), negação(not).
// AND(&&) todos as condições devem avaliar como "true"
if ((10 > 15) && (10 != 15)) { // retorna (false) && (true)
    return false;
}
if ((12 % 4 == 0) && (12 != 24)) { // retorna (true) && (true)
    return true;
}
// OR(||) ao menos uma condição deve avaliar como "true"
if ((10 > 15) || (10 != 15)) { // retorna (false) && (true)
    return true;
}
if ((12 % 4 == 0) || (24 != 24)) { // retorna (true) && (false)
    return true;
}
// NOT(!) nega a condição, se era "true" será false e vicevarsa
var negacao = !false; // valor será "true"
if (!(10 > 15)) {
    return true;
}
// Operadores de concatenação
// Serve para unir cadeias de texto. Devolve outra cadeia de texto.
var nome = 'Teodoro', sobrenome = 'Garcia';
var nomeCompleto = nome +' '+ sobrenome;
// Se misturarmos outros tipos de dados, eles serão convertidos em
// cadeia de texto
var linha = 'M', assento = 7;
var localizacao = linha + assento; // 'M7' como string