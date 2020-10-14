let numeroPares = [2,4,6,8,10];

// utilizando map() - passa por cada elemento
let numerosParesDobro = numeroPares.map(function(valor){
    return valor * 2;
});
console.log(numerosParesDobro);

// utilizando filter() - filtra as informações de
// acordo com alguma regra.
let numerosFiltrados = numeroPares.filter(function(valor){
    return valor < 6;
});
console.log(numerosFiltrados);
let numerosFiltrados2 = numeroPares.filter(function(valor){
    return valor > 10;
});
console.log(numerosFiltrados2);

// utilizando reduce() - percorre e converter o array em um único elemento/valor.
let somaPares = numeroPares.reduce(function(total, valor){
    return total + valor;
});
console.log(somaPares);

// utilizando foreach() - interar/percorrer o array. Nâo retorna nada.
numeroPares.forEach(function(valor, indice){
    console.log("O indice " + indice + " tem o valor: " + valor);
});

// utilizando find() - buscar um elemento.
var frutas = ["Uva", "Maça", "Dereja", "Morango", "Abacaxi"];
var moraNoMar = frutas.find(function(fruta){
    return fruta == "Abacaxi"
});
console.log(moraNoMar);