var nomeDeUsuario = "Nome de Alguém";
console.log(nomeDeUsuario);

/**
 * variáveis do tipo let existe apenas no bloco
 * de execução, dentro do contexto da variável.
 */
// bloco de execução 1:
 if (true) {
    let saudacao = "bom dia!";
    console.log(saudacao);
}
// bloco de execução 2:
if (true) {
    let saudacao = "até mais!";
    console.log(saudacao);
}

//-------------------------------
let nomeDeUsuario2 = "Outra Pessoa";
console.log(nomeDeUsuario2);
nomeDeUsuario2 = "Nome ...";
console.log(nomeDeUsuario2);

if (true) {
    let nomeDeUsuario2 = "Mais Uma Pessoa";
    console.log(nomeDeUsuario2);
}

//-------------------------------
const carro = "Uno Mille";
console.log(carro);
carro = "Fox";
console.log(carro); // isso gera um erro.
/**
 * O erro se deve a condição que a variável "carro"
 * é uma constante, não pode ser alterada.
 */