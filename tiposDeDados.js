/**
 * Tipos de Variáveis - String
 */
// variável do tipo String usando "" (áspas duplas);
let nome = "Alguém Aqui!";
console.log(nome);
// variável do tipo String usando '' (aspas simples);
let sobrenome = 'Não sei quen é';
console.log(sobrenome);
/**
 * Tipos de Variáveis - Inteiro, Decimal
 */
let idade = 22;
console.log(idade); // retorna um inteiro.
let altura = 1.7800;
console.log(altura); // retorna um decimal.
/**
 * Tipos de Variáveis - Booleano
 */
let diaEstaChuvoso = true;
console.log(diaEstaChuvoso); // retorna um booleano(true)
let vouParaPraia = false;
console.log(vouParaPraia); // retorna um booleano(false)

/**
 * Not a Number - NaN
 * Null - valor nulo
 * Undefined - varíaval definida sem valor
 */
let naoNumerico = NaN; // valor não numérico
console.log(naoNumerico);
let jogadores = null; // valor nulo
console.log(jogadores);
let espectadores = undefined; // valor não definido "undefined"
console.log(espectadores);
let espectadores2; // valor não definido "undefined"
console.log(espectadores);

/**
 * Objeto literal
 * nomeVariavel = { propriedade: "valor" }
 */
let nomeObjetoLiteral = {
    propriedade: "valor",
}
console.log(nomeObjetoLiteral);

let meuCarro = {
    marca: "Fiat",
    modelo: "Uno Mille",
    ano: "1988",
}
console.log(meuCarro);

// Objeto literal
let moto = {
    marca: 'Honda',
    ano: '2019',
    modelo: 'CB500'
}
console.log(moto);
console.log(moto.marca);
console.log(moto.ano);
console.log(moto.modelo);

/**
 * Arrays (lista e matrizes)
 * possui indices numéricos para referenciar o valor
 * Ex.: arraylist = ["arroz","feijão","bife"]
 * console.lo(arraylist[1]) - retorna "feijão".
 */
let seriesFavoritas = ["Friends","Breaking Bad","Games of Thrones"];
console.log(seriesFavoritas);
console.log(seriesFavoritas[0]);
console.log(seriesFavoritas[1]);
console.log(seriesFavoritas[2]);
console.log(seriesFavoritas[3]); // undefined: valor não definido