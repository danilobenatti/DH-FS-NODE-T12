var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
const celulares = require('../database/celulares');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', IndexController.viewContato);
router.get('/confirmarcontato', IndexController.confirmarContato);

router.get('/celulares', (req, res) => {
  let max = req.query;
  let lista = celulares.filter((cel) => cel.preco <= max);
  res.send(lista);
});

module.exports = router;