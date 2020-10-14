/**
 * Matriz,Array ou Vetor.
 */
let seriesFavoritas = ["Friends","Game of Thrones","Breaking Bad"];
console.log(seriesFavoritas[2]);

let enderecos = [{endereco:'Rua XYZ',cidade:'São Paulo'},{endereco:'Rua ABC',cidade:'Salvador'}];
let pessoa = ["nome", 22, 1.80, false, ["musica", "café"],[...enderecos]];
console.log(pessoa[0]);
console.log(pessoa[4]);
console.log(pessoa[5]);
console.log(pessoa.length);
console.log(pessoa);