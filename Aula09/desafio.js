const moment = require("moment");
//const differenceInDays = require("date-fns/differenceInDays");
const {differenceInDays, differenceInMonths} = require("date-fns");

let dataAntiga = moment('2005-09-15');
let dataAtual = moment('2020-09-15');

let diasDeDiferenca = dataAtual.diff(dataAntiga, 'days');
let mesesDeDiferenca = dataAtual.diff(dataAntiga, 'months');

console.log("Diferença de dias "+ diasDeDiferenca);
console.log("Diferença de meses "+ mesesDeDiferenca);

let dataAntiga2 = new Date(2005,08,15);
let dataAtual2 = new Date(2020,08,15);

let diasDeDiferenca2 = differenceInDays(dataAtual2,dataAntiga2);
let mesesDeDiferenca2 = differenceInMonths(dataAtual2,dataAntiga2);

console.log("Diferença de dias "+ diasDeDiferenca2);
console.log("Diferença de meses "+ mesesDeDiferenca2);