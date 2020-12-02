/**
 * Operador flecha - Arrow Function (=>)
 */
let soma = (num1,num2) => num1 + num2;
console.log(soma(2,3));
let dobro = num => num * 2;
console.log(dobro(6));

// ------------------------------
const somar = () => {
    console.log("Estou em uma Arrow Function!");
}
const arrowFunction = () => console.log("Continuo em uma Arrow Function!");

somar();
arrowFunction();

// ------------------------------
const arrow = numero => console.log("Recebi um número: " + numero);
arrow(5);
const arrow2 = (numero1,numero2) => {
    console.log("Recebi os números: " + numero1 + " e " + numero2);
    return numero1 + numero2;
}
console.log(arrow2(6,7));

/**
 * Estrutura básica de uma Arrow Function
 */
function divide(numero1,numero2) {
    return numero1/numero2;
}
console.log(divide(4,2));
// com arrow function a função acima se torna:
const dividir = (numero1,numero2) => numero1/numero2;
console.log(dividir(4,2));

let horaAtual = () => {
    let data = new Date();
    return data.getHours() +":"+ data.getMinutes();
}
console.log(horaAtual());