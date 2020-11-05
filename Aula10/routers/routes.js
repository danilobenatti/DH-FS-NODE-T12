const express = require("express");
const PrimeiroController = require("../controllers/PrimeiroController");
const router = express.Router();
const primeiroController = require("../controllers/PrimeiroController");

/* router.get('/', (req, res) => {
    res.send('Você está na home page');
}); */
router.get('/', PrimeiroController.index);

/* router.get('/cumprimentar/:nome', (req,res) => {
    let {nome} = req.params;
    res.send('Olá, '+ nome);
}); */
router.get('/cumprimentar/:nome', PrimeiroController.cumprimentar);

router.get('/calcular/:numero1/:numero2?', PrimeiroController.calcular);

// Criando rota parametrizada com query params que
// serão info pela URL
router.get('/query/:nome?/:sobrenome?', PrimeiroController.getQueryParams);

module.exports = router;