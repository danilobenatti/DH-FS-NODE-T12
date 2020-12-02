let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (const valor in bart) {
    if (bart.hasOwnProperty(valor)) {
        console.log(bart[valor]);
    }
}

//-------------------------------
let frase = "Essa semana vou no colearning";

for (const iterator of frase) {
    console.log(iterator.valueOf(frase));
}