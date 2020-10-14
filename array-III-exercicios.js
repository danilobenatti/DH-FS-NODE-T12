let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(numero){
    return numero > 18;
});
console.log(maiores);