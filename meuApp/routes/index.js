var express = require('express');
var router = express.Router();
const ContatoController = require('../controllers/ContatoController'); // <= adicionando o controller de contatos.
const EstudanteController = require('../controllers/EstudanteController');
const HomeController = require('../controllers/HomeController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', HomeController.index);

/* criando rota para contatos */
router.get('/contato', ContatoController.index);
// router.get('/contato', function(req, res, next) {
//   res.render('contato', {title: 'Contato'})
// });

/* criando rota para estudantes */
router.get('/estudantes', EstudanteController.index);

module.exports = router;
