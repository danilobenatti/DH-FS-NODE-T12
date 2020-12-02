const json = require("./json")

let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ];

  // JavaScript Object Notation - JSON.
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
function servicosPrestados(pet, servicoRealizado){
    servicoRealizado(pet)
}

function darBanhoNoPet(pet){
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("banho");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " tomou banho na data: " + data);
    console.log(pets);
}
function tosarPet(pet){
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("tosa");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " foi tosado na data: " + data);
    console.log(pets);
}

/**
 * Desafio 1 = identificar qual a data que o serviço foi realizado
 */

servicosPrestados(pets[0], darBanhoNoPet)
servicosPrestados(pets[0], tosarPet)
console.log(pets);

/**
 * Desafio 2 - importar o json no arquivo index.js e criar uma função 
 * que retorne o json, porém, não como string e sim em formato de array de objetos
 */
// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos
//x.push(...y);
//console.log(x);
function cadastrarPetsSpreadOperator(pets, json) {
    let arrayPetsJson = JSON.parse(json);
    pets.push(...arrayPetsJson);
    return pets
}
pets2 = cadastrarPetsSpreadOperator(pets,json);
console.log(pets2);

function cadastrarPetsFor(pets, json) {
    let arrayPetsJson = JSON.parse(json);
    for (let index = 0; index < arrayPetsJson.length; index++) {
        pets.push(arrayPetsJson[index]);
    }
    return pets;
}

/**
 * Desafio - Crie uma função filtrarPetPorNome, que quando receber um parâmetro que será uma string 
 * irá filtrar um pet por nome e retorná-lo e senão irá retornar que não existe o pet na lista
 */
function filtrarPetPorNome(pets, nomePet){
    let petsFiltrados = pets.filter((pet) => {
        return pet.nome == nomePet && pet.vacinado == true;
    });
    if (petsFiltrados.length > 0) {
        return petsFiltrados;
    } else {
        return "Nenhum pet foi encontrado com o nome " + nomePet;
    }
}

console.log(filtrarPetPorNome(pets2,"Costelinha"));