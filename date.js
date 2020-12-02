let dataAtual = new Date();
console.log(dataAtual);
/**
 * getDay() retorna o dia da semana:
 * 0 - domingo
 * 1 - segunda-feira
 * 2 - terça-feira
 * 3 - quarta-feira
 * 4 - quinta-feira
 * 5 - sexta-feira
 * 6 - sábado
 */
console.log(dataAtual.getDay());
switch (dataAtual.getDay()) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("-");
        break;
}
/**
 * getDate() retorna do dia do mês.
 */
console.log(dataAtual.getDate());
/**
 * getMounth() retorna o mês do ano corrente.
 * Ex.: janeiro => 0 / fevereiro => 1 / março => 2
 */
console.log(dataAtual.getMonth() + 1);
/**
 * getFullYear() o ano corrente.
 */
console.log(dataAtual.getFullYear());
/**
 * Exercícios
 */
let meuAniversario = new Date(1982,07,03);
console.log(meuAniversario.getDay());
console.log(meuAniversario.getDate());
console.log(meuAniversario.getMonth());
console.log(meuAniversario.getFullYear());

const data1 = new Date('1995-05-20');
console.log(data1);