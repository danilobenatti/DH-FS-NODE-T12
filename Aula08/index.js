const json = require("./json.js")
// const { listarPets, cumprimentar } = require("./funcoes-pet");
const funcoesPet = require("./funcoes-pet");
const { 
  listarPets,
  cadastrarPet,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsSpreadOperator,
  filtrarPetPorNome,
  filtrarPetVacinados,
  contagemDePets
 } = require("./funcoes-pet");

// cumprimentar("Carlos");
funcoesPet.cumprimentar("Carlos");

/**
 * Desafio 1 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020 utilizando biblioteca moment
 * Desafio 2 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020 utilizando biblioteca date-fns
 */
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Macho',
    vacinado: false,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

let pet = 
  {
    id: 8,
    nome: 'Major',
    tipo: 'cachorro',
    raca: 'Doberman',
    idade: 3,
    genero: 'Macho',
    vacinado: true,
    servicos: []
  };

pets = cadastrarPetsSpreadOperator(pets, json);
console.log(pets);
listarPets(pets);

pets = cadastrarPet(pets, pet);
console.log(pets);
listarPets(pets);

contagemDePets(pets);

console.log(filtrarPetPorNome(pets, "Costelinha"));
console.log(filtrarPetVacinados(pets, true, " Ok! estão vacinado(s)."));
console.log(filtrarPetVacinados(pets, false, " Precisam ser vacinado(s)!"));

listarPets(pets);

servicosPrestados(pets[0], darBanhoNoPet)
servicosPrestados(pets[0], tosarPet)
funcoesPet.removerPet(3,pets);
console.log(pets);

return