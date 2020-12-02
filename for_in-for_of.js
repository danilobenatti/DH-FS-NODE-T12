/**
 * Exercício de video-aula com for-in
 */
let pessoa = {
    nome: "Breandan Eich",
    idade: 58,
    profissao: "Programador"
}
for (const key in pessoa) {
        console.log(pessoa[key]);
}
// ------------------------------
let outras = ['1','2','3'];
let carro = {
    nome: "Fox",
    ano: "2011",
    cores: ['Branco','Preto'],
    ...outras
}

/**
 * for-In - interar sobre objetos literais.
 */
console.log(carro);
for (const propriedade in carro) {
    if (carro.hasOwnProperty(propriedade)) {
        console.log(carro[propriedade]);
    }
}

/**
 * for-of: interação com matrizes e strings.
 */
let series = ["Friends", "Game of Thrones", "Breaking Bad"];

for (const iterator of series) {
    console.log(iterator);
}