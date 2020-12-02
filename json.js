/**
 * JSON.parse() -> recebe um dado(texto em formato JSON)
 * e converte em array ou Obj literal.
 */
let dadosEmJson = '[{"nome":"Brail","capital":"Brasília"}]';

let dadosConvertParse = JSON.parse(dadosEmJson);
console.log(dadosConvertParse);
/**
 * JSON.stringify() -> converte array ou Obj literal em 
 * string tipo JSON (JavaScript Object Notation).
 */
let dadosNumObjeto = {
    nome:'Maria',
    sobrenome:'Quitéria',
    pais:'Brasil'
}
let dadosConvertStringity = JSON.stringify(dadosNumObjeto);
console.log(dadosConvertStringity)

// ------------------------------
let pessoa = {
    nome: 'Danilo',
    idade: 38,
    altura: 1.82,
    matricula: true
};
let json = JSON.stringify(pessoa);
console.log(json + " <- Um Objeto em formato JSON");
/**
 * Obs.: JSON não suporta métodos dentro o objeto.
 */
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);
console.log(objetoDeNovo.nome);

let listaCompras = ["leite","pão","manteiga","mussarela"];
json = JSON.stringify(listaCompras);
console.log(json + " <- Um array em formato JSON");
let arrayDeNovo = JSON.parse(json);
console.log(arrayDeNovo);
console.log(arrayDeNovo[2]);