/**
 * fonte: https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808
 */
// Valor retornado: Verde Amarelo Azul Branco.
cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
    console.log(item);
}
cores.forEach(element => {
    imprimir(element);
});

//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item * 2);
}
numeros.forEach(tabuadaDe2);
numeros.forEach(item => {
    tabuadaDe2(item);
});