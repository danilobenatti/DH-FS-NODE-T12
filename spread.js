let frutasUm = ["Banana","Pera","Maça"];
let frutasDois = ["Pessego","Ameixa","Laranja"];

// Spreading
let todasAsFrutas = [...frutasUm, ...frutasDois];
console.log(todasAsFrutas);

// ------------------------------
let curso = {
    curso: "Fullstack",
    turno: "Manhã",
    sede: "São Paulo"
};
let estudante1 = {
    nome: "Denise",
    email: "denise@email.com",
    ...curso
};
let estudante2 = {
    nome: "José",
    email: "jose@email.com",
    ...curso
};
console.log(estudante1);
console.log(estudante2);

// ------------------------------
function comVariosParametros(...params) {
    // código a executar
}
comVariosParametros('a');
comVariosParametros('a','b');
comVariosParametros('a','b','c');
// ------------------------------

let frutas = ['Maça','Banana','Uva'];
let frutas2 = ['Laranja','Abacate','Goiaba'];

let listaCompleta = [frutas, frutas2];
console.log(listaCompleta);
listaCompleta = [...frutas, ...frutas2];
console.log(listaCompleta);

// ------------------------------
let pessoa = {
    nome: 'Danilo',
    idade: '38'
};
let infoPessoal = {
    telefone: '123456789',
    rg: '123123123123',
    ...pessoa
}
let infoPessoalCompleta = {
    endereco: 'Rua Xyz, 900',
    ...infoPessoal
}
console.log(infoPessoal);
console.log(infoPessoalCompleta);

// ------------------------------
/**
 * uso de spread em parâmetros.
 */
function letras(...params) {
    console.log(params);
    console.log(params +' -> '+ params.length);
    console.log(params[1]);
}
letras("a");
letras("a","b");
letras("a","b","c");

/**
 * Spread operator em funções
 */
let notas = [9.3,8.5,3.2,7,10];
console.log(Math.max(...notas));
console.log(Math.min(...notas));

function myFuncao(param1,param2,...outros) {
    return outros;
}
console.log(myFuncao('a','b','c','d','e'));

// ------------------------------
function operacao(outroParametro,...numeros) {
    /**
     * Sabendo que os números são agora um array
     * podemos usar o método reduce para obter a soma.
     */
    switch (outroParametro) {
        case "+":
            retorno = numeros.reduce((acumulador,valorAtual) => acumulador += valorAtual);
            break;
        case "*":
            retorno = numeros.reduce((acumulador,valorAtual) => acumulador *= valorAtual);
            break;
        default:
            retorno = "Operação inexistente!";
            break;
    }
    return retorno;
}
console.log(operacao('/',2,4));
console.log(operacao('*',2,4));
console.log(operacao('+',13,6,8,12,23,37));