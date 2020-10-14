/**
 * Condicional if - Ternário
 */
let dia = "segunda-feira";

let resultado = (dia == "domingo" ? "Vou a praia" : "Fico em casa!");

console.log(resultado);

/**
 * Condicional switch()
 */
switch (dia) {
    case 'segunda-feira':
        console.log("Vou tomar café");
        break;
    case 'terça-feira':
        // implementa alguma rotina
        break;
    case 'quarta-feira':
        console.log("Vou ao cinema");
        break;
    default:
        console.log("Fico em casa!")
        break;
}