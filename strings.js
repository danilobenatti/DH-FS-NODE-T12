let texto = "Olá mundo novo!";
console.log(texto.length);
console.log(texto.indexOf("mundo"));
console.log(texto.slice(4,9));
console.log(texto.slice(-11,-6));

// ------------------------------
let dado = "Oi eu sou um programador JavaScript";
console.log(dado.length);
console.log(dado.indexOf("s"));
console.log(dado.indexOf("promocao"));
// ------------------------------
let palavra = dado.slice(13,24);
console.log(palavra);
console.log(dado);
// ------------------------------
/**
 * trim() - remover espaços em branco
 * antes e depois de uma String.
 */
let texto2 = "  sou um ser humano  ";
console.log("["+ texto2 +"]");
console.log("["+ texto2.trim() +"]");
// ------------------------------
/**
 * split() - converte uma string em um array.
 */
console.log("Testando o método split".split());
console.log("Sou do planeta terra".split(" "));
/**
 * replace() - substitui uma string por outra.
 */
console.log("Sou programados PHP".replace("PHP","JavaScript"));