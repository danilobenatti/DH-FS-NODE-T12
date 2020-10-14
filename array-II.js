/**
 * Exercício de Aula
 */
let cores = ["Azul","Branco","Vermelho","Verde"];
cores.push("Violeta","Amarelo"); // push adiciona um ou mais elementos no final array.
console.log(cores);
cores.unshift("Branco","Preto"); // unshift adiciona um ou mais elemento no início.
console.log(cores);
// ------------------------------
let nomes = ['Joana','Mariana','Leonardo'];
console.log(nomes);
let oPrimeiro = nomes.shift(); // shift remove e também retorna o primeiro elemento.
let oUltimo = nomes.pop(); // pop remove e também retorna o último elemento do array.
console.log(nomes);
console.log(oPrimeiro);
console.log(oUltimo);


let pessoa = ["nome1", 1.80,1.80, true];
console.log(pessoa);

// push: adiciona dados no final do array.
let arraySize = pessoa.push(22);
console.log(pessoa);
console.log(pessoa.length);
console.log(arraySize);

// pop: contrário de push, retira o último elemento.
pessoa.pop();
console.log(pessoa);
/**pode-se utilizar o "pop" para excluir e 
 * pode obter o dado para uma variável
 */
let excluido = pessoa.pop();
console.log(excluido);
console.log(pessoa);
// unshift: adiciona elemento no início do array.
pessoa.unshift(22, [1,2,3]);
console.log(pessoa);
// shift: retira o primeiro elemento do array.
let adicionado = pessoa.shift();
console.log(pessoa);
console.log(adicionado);

// indexOf() e lastIndexOf()
console.log(pessoa.indexOf(1.8)); // encontra posição da primeira ocorrência.
console.log(pessoa.indexOf(true)); // -1: elemento não encontrado.
console.log(pessoa.lastIndexOf(1.80)); //encontra posição da última ocorrência.
// includes()
console.log(pessoa.includes("nome1"));
// join()
console.log(pessoa.join());
console.log(pessoa.join("/"));