// criação de uma variável com let recebendo valor de uma string
let nome = 'Pet Shop NodeJS DH'

// exibindo valor da variável nome no console
console.log(nome)

// criacao de array com alguns itens para que possamos percorrer
let animais = ['Leão', 'Cavalo', 'Cachorro'];

// Desafio 1 - Percorrer o array de animais da variável array e listá-los no terminal

// utilizando for comum para percorrer array de animais
for (let i = 0; i < animais.length; i++) {
  console.log(animais[i]);
}

// utilizando for of para percorrer array de animais, repare que a sintaxe é mais simples
// e no fim das contas obtemos o mesmo efeito, portanto, fica a seu critério em decidir
// qual dos dois formatos irá implementar
for (let item of animais){
  console.log(item)
}

// criacao de um objeto que possui características que pertencam ao mesmo contexto,
// neste caso abaixo, estamos criando uma variável pessoa com as propriedades nome e idade
let pessoa = {
  nome: 'Victor',
  idade: 99
}

// Desafio 2 - Percorrer o objeto da variável pessoa, e demonstrando como obtemos a propriedade,
// e, respectivamente o valor daquela propriedade em questão
for (let item in pessoa) {
  console.log("Propriedade: " + item + " valor da propriedade " + pessoa[item])
}

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false
  }
];

// Desafio 3 - Criar uma função que percorra a lista de pets e
// listar a seguinte mensagem para cada pet "Nome: nome Do Pet" 
// e também uma mensagem para o tipo para cada pet "Tipo: tipo Do Pet"
// E por fim, retornar uma mensagem contendo a quantidade total de pets cadastrados no nosso sistema
function listarPets() {
  for (let i = 0; i < pets.length; i++) {
    console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
  }
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

// executando a função de listarPets() para que ela retorne a execução no console,
// trazendo o nome e o tipo do pet, e, por fim contando a quantidade total de pets cadastrados
// Desafio 4 - Criar uma função que adicione pets na nossa lista de pets
// (adicionar elementos no array de objeto), lembrando, que teremos que fazer isso testando no terminal
// Desafio 4.1 - 

// Desafio 5 - Criar uma funcao de titulo validaDados que ira validar se o objeto passado como parâmetro
// possui todas as propriedades necessárias, que são: nome(string), tipo(string), raca(string), idade(number),
// genero(string) e vacinado(booleano) 
// (lembrando que devemos validar a propriedade vacinado para receber apenas valores booleanos - true or false)

function validaDados(objetoPet){
  return (
    typeof objetoPet.nome === 'string'
    && typeof objetoPet.tipo === 'string'
    && typeof objetoPet.raca === 'string'
    && typeof objetoPet.idade === 'number'
    && typeof objetoPet.genero === 'string'
    && typeof objetoPet.vacinado === 'boolean'
  )
 }

function cadastrarPet(objetoPet){
  if (typeof objetoPet == "object") {
    if (validaDados(objetoPet)) { //true ou false.
      pets.push(objetoPet);
      console.log(pets);
    } else {
      console.log("Objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto válido para cadastrar um novo pet");
  }
}

let novoPet = {
    nome: 'Novo Pet',
    tipo: 'gato',
    raca: 'ciames',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false
};

cadastrarPet(novoPet);

// callback
function calcular(numero1, numero2, operacao){
  operacao(numero1, numero2);
  console.log("A operação foi realizada com sucesso!")
}

function somar(numero1, numero2){
  console.log(numero1 + numero2);
}
function subtrair(numero1, numero2){
  console.log(numero1 - numero2);
}
function multiplicar(numero1, numero2){
  console.log(numero1 * numero2);
}
function dividir(numero1, numero2){
  console.log(numero1 / numero2);
}

calcular(10, 20, somar);
calcular(20, 10, subtrair);
calcular(10, 20, multiplicar);
calcular(10, 2, dividir);

/**
 * Deafio 6 - criar uma função callback chamada servicosPrestados que tenha dois serviços:
 * dar banho no pet e tosar o pet.
 * Sendo assim tereos sempre que passar um pet da nossa lista de pets e também um serviço que
 * aquele pet ira utilizar.
 * servicosPrestados(pets[0].nome, darBanhoNoPet);
 * servicosPrestados(pets[0].nome, tosarPet);
 *
 * console.log("O serviço de tomar banho foi realizado com sucesso no pet " + yoshi);
 * console.log("O serviço de tosa banho foi realizado com sucesso no pet " + yoshi);
 *
 * Terá que ser criado uma propriedade dentro de cada pet chamada serviços que armazene todos
 * serviços realizados.
 * Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados
 **/


 // utilizando spread
let x = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  }
];
let y = [
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false
  }
];
 
x.push(...y);
console.log(x);


