const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Você está na homepage!');
    res.send('Você está na homepage!');
});

/**
 * Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
 * e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
 * que foi informado e exibir uma mensagem de cumprimento "Olá, nome"
 */
app.get('/cumprimentar/:nome/:sobrenome/:idade', (req, res) => {
    console.log(req.params);
    //let nome = req.params.nome;
    let {nome} = req.params;
    res.send('Olá, '+ nome);
});

/**
 * Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
 * e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
 * deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
 * o resultado.
 */
app.get('/calcular/:numero1?/:numero2?', (req, res) => {
    console.log(req.params);
    let {numero1, numero2} = req.params;
    if ((numero1 != undefined) && (numero2 != undefined)) {
        res.send('Soma: '+ (parseInt(numero1) + parseInt(numero2)));
    } else {
        res.send('Informar numeros!')
    }
});
    
app.listen(3000, () => {
    console.log('Servidor rodando local na porta 3000');
});


//const http = require('http');
//http.createServer(express).listen(8080, () => 
//console.log('Servidor rodando local na porta 8080'));