/**
 * Alocação por Desestruturação
 * Extração de dados de arrays ou objetos literais
 * A desestruturação não modifica o array ou objeto literal de origem
 * 
 * Seu único objetivo é copiar os valores de forma prática e rápida.
 */
let cores = ["cor branca","cor azul","cor amarela","cor vermelha","cor preta"];
/*
let corBranco = cores[0];
let corAzul = cores[1];
let corAmarelo = cores[2];
*/

let [corBranco,corAzul,corAmarelo,corVermelho,corPreto] = cores;
console.log(corBranco);
console.log(corAzul);
console.log(corPreto);

let pessoa = {
    nome: "Denise",
    altura: 1.80,
    idade: 23,
    profissao: "Programadora",
    seriesFavoritas: ["Breaking Bad","Game of Thrones","Friends"]
}
let {nome,profissao} = pessoa;
console.log(nome);
console.log(profissao);

const {seriesFavoritas,altura} = pessoa;
console.log(seriesFavoritas);
console.log(altura);

//-------------------------------
let listaCompras = ["pão","leite","açucar"];
const [item1,item2,item3] = listaCompras;
console.log(item2);

let listaCompras2 = ["pão","leite","açucar","farinha"];
const [valor1, , ,valor2] = listaCompras2;
console.log(valor2);

//-------------------------------
/**
 * Como alterar o nome da variável de um objeto.
 */
let usuario = {
    nomeUser: "Usuário",
    idadeUser: 30,
    faltas: 3
}
let {nomeUser,faltas: totalFaltas} = usuario;
console.log(totalFaltas);