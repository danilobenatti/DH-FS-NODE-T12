const json = require("./json")

let pets = [
    {
      id: 1,
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
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
/*
function servicosPrestados(pet, servicoRealizado){
    servicoRealizado(pet)
}
*/
/*
function darBanhoNoPet(pet){
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("banho");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " tomou banho na data: " + data);
    console.log(pets);
}
*/

/*
function tosarPet(pet){
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("tosa");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " foi tosado na data: " + data);
    console.log(pets);
}
*/

/**
 * Desafio 1 = identificar qual a data que o serviço foi realizado
 */
/*
servicosPrestados(pets[0], darBanhoNoPet);
servicosPrestados(pets[0], tosarPet);
console.log(pets);
*/
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

/**
 * Temos 1000 pets e nossa empresa pretende criar uma campanha de vacinação,
 * porém, precisamos atingir apenas pets que ainda não foram vacinados, para isso
 * teremos que efetuar uma contagem de quantos pets já estão vacinados e quantos pets
 * ainda precisam ser vacinados.
 * 
 * Por exemplo: Pense que temos 700 animais vacinados e 300 não vacinados, logo,
 * o foco da nossa campanha seria atingir apenas os 300 animais que ainda não foram vacinados
 * mas, fiquem tranquilos. Por enquanto, iremos apenas focar na contagem de vacinados e 
 * não vacinados.
 */

function filtrarPetVacinados(listaDePets, vacinado, msg) {
    let petsFiltrados = listaDePets.filter((pet) => {
        return pet.vacinado == vacinado;
    });
    if (petsFiltrados.length > 0) {
        return petsFiltrados.length + msg;
    } else {
        return "Não encontrado pet(s)" + msg;
    }
}
console.log(filtrarPetVacinados(pets2, true, " vacinado(s)!"));
console.log(filtrarPetVacinados(pets2, false, " não vacinado(s)!"));

function contagemDePets(pets) {
    let vacinados = 0, naoVacinados = 0;
    pets.filter((pet) => {
        if (pet.vacinado) {
            vacinados++;
        } else {
            naoVacinados++;
        }
    });
    console.log(vacinados);
    console.log(naoVacinados);
}
contagemDePets(pets2);

/**
 * Transformar as funções em arrow function:
 */
/*
function listarPets() {
    for (let i = 0; i < pets.length; i++) {
      console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
    }
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
  }
*/
 const listarPets = (pets) => {
    pets.forEach((pet) => {
        console.log("Nome: " + pet.nome + " / " + "Tipo: " + pet.tipo);
    });
//    for (let i = 0; i < pets.length; i++) {
//      console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
//    }
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");

  }
  listarPets(pets2);
/*
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
*/
const validaDados = (objetoPet) => {
    return (
      typeof objetoPet.nome === 'string'
      && typeof objetoPet.tipo === 'string'
      && typeof objetoPet.raca === 'string'
      && typeof objetoPet.idade === 'number'
      && typeof objetoPet.genero === 'string'
      && typeof objetoPet.vacinado === 'boolean'
    )
   }
/*
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
*/
const cadastrarPet = (objetoPet) => {
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
  /*
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
  */
 const servicosPrestados = (pet, servicoRealizado) => {
    servicoRealizado(pet)
 }

 const darBanhoNoPet = (pet) => {
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("banho");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " tomou banho na data: " + data);
    console.log(pets);
}

const tosarPet = (pet) => {
    let data = new Date();
    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    pet.servicos.push("tosa");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " foi tosado na data: " + data);
    console.log(pets);
}
servicosPrestados(pets[0], darBanhoNoPet)
servicosPrestados(pets[0], tosarPet)
console.log(pets);

/**
 * Desafio - Criar uma função "removerPet" que ao receber dois paramentos (sendo o primeiro
 * o ID do pet, e o segundo a lista na qual queremos remover um pet). Deveremos reconhecer
 * o pet e excluí-lo, caso o ID passado, não seja encontrado na lista de pets, iremos retonar
 * uma mensagem do tipo: "Não encontramos nenhum pet com o id" + idPet.
 */

 const removerPet = (id, lista) => {
     let pet = lista.filter((pet) => {
         return pet.id == id;
     });
     if (pet.length > 0) {
         pets.splice(id-1, 1);
         console.log("Pet " + id + " removido!");
         console.log(pets);
     } else {
         console.log("Pet com id: "+ id +" não encontrado!");
     }
 }
 removerPet(3,pets2);