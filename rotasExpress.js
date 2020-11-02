const express = require("express");
const app = express.Router();
/**
 * req - requisição (objeto literal)
 * res - resposta (objeto literal)
 */
app.get('/', function (req,res) {
    res.send('Seção inicial - Bem-vindo!');
})

app.get('/contato', function (req,res) {
    res.send('Seção de contato');
})