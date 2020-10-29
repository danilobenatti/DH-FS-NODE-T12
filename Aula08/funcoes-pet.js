const moment = require("moment");

console.log(moment().format('DD/MM/YYYY'));

const listarPets = (listaDePets) => {
    listaDePets.forEach((pet) => {
        console.log("Nome: " + pet.nome + " / " + "Tipo: " + pet.tipo);
    });
//    for (let i = 0; i < pets.length; i++) {
//      console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
//    }
    console.log("Temos o total de " + listaDePets.length + " pet(s) registrado(s) no sistema");
}

const cumprimentar = (nome) => {
      console.log("Olá " + nome);
}

const cadastrarPet = (pets, objetoPet) => {
    if (typeof objetoPet === 'object') {
        if (validaDados(objetoPet)) {
            pets.push(objetoPet);
            return pets;
        } else {
            console.log("Objeto informado não possui todas as propriedades necessárias")
        }
    } else {
        console.log("Informe um objeto válido para cadastrar um novo pet");
    }
}

const isJsonParsable = (string) => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
}

const cadastrarPetsSpreadOperator = (pets, json) => {
    if (isJsonParsable(json)) {
        let arrayPetsJson = JSON.parse(json);
        pets.push(...arrayPetsJson);
        return pets;
    } else {
        return "Não é um objeto JSON"
    }
}

const cadastrarPetsFor = (pets, json) => {
    let arrayPetsJson = JSON.parse(json);
    for (let index = 0; index < arrayPetsJson.length; index++) {
        pets.push(arrayPetsJson[index]);
    }
    return pets;
}

const filtrarPetPorNome = (listaDePets, nomePet) => {
    let petsFiltrados = listaDePets.filter((pet) => {
        return (pet.nome == nomePet && pet.vacinado == true);
    });
    if (petsFiltrados.length > 0) {
        return petsFiltrados;
    } else {
        return "Nenhum pet foi encontrado com o nome " + nomePet;
    }
}

const filtrarPetVacinados = (listaDePets, vacinado, msg) => {
    let petsFiltrados = listaDePets.filter((pet) => {
        return pet.vacinado == vacinado;
    });
    if (petsFiltrados.length > 0) {
        return petsFiltrados.length + msg;
    } else {
        return "Não encontrado pet(s)" + msg;
    }
}

const contagemDePets = (listaDePets) => {
    let vacinados = 0, naoVacinados = 0;
    listaDePets.filter((pet) => {
        if (pet.vacinado) {
            vacinados++;
        } else {
            naoVacinados++;
        }
    });
    console.log("São "+ vacinados +" pets vacinados!");
    console.log("São "+ naoVacinados +" pets não vacinados!");
}

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

const servicosPrestados = (pet, servicoRealizado) => {
    servicoRealizado(pet)
 }

 /**
  * Alterar o método Date() para moment().
  */
const darBanhoNoPet = (pet) => {
    let data = new Date();
//    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    data = moment().format("DD/MM/YYYY");
    pet.servicos.push("banho");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " tomou banho na data: " + data);
}

 /**
  * Alterar o método Date() para moment().
  */
const tosarPet = (pet) => {
    let data = new Date();
//    data = data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear();
    data = moment().format("DD/MM/YYYY");
    pet.servicos.push("tosa");
    pet.servicos.push(data);
    console.log("O pet " + pet.nome + " foi tosado na data: " + data);
}

const removerPet = (id, listaDePets) => {
    let pet = listaDePets.filter((pet) => {
        return pet.id == id;
    });
    if (pet.length > 0) {
        listaDePets.splice(id-1, 1);
        console.log("Pet " + id + " removido!");
        console.log(listaDePets);
    } else {
        console.log("Pet com id: "+ id +" não encontrado!");
    }
}

module.exports = {
    listarPets,
    cumprimentar,
    cadastrarPetsSpreadOperator,
    cadastrarPetsFor,
    cadastrarPet,
    filtrarPetPorNome,
    filtrarPetVacinados,
    contagemDePets,
    validaDados,
    cadastrarPet,
    servicosPrestados,
    darBanhoNoPet,
    tosarPet,
    removerPet
}