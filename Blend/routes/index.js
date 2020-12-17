const { request } = require('express');
var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
var celulares = require('../database/celulares');
var filmes = require('../database/filmes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', IndexController.viewContato);
router.get('/confirmarcontato', IndexController.confirmarContato);

router.get('/celulares', (req, res) => {
  let { max } = req.query;
  if (max != null && max != '') {
    let lista = celulares.filter((celular) => {
        return celular.preco <= parseFloat(max);
    });
    res.send(lista);  
  } else {
    //res.json(celulares);
    res.send(celulares);
  }
});

router.put('/filme/:id', (req, res) => {
  let { id } = req.params;
  let { titulo, duracao, genero } = req.body;
  filmes.forEach((filme) => {
    if (filme.id == id) {
      filme.titulo = titulo;
      filme.duracao = duracao;
      filme.genero = genero;
    }
  });
});

router.delete('/celular/:id', (req, res) => {
  let { id } = req.params;
  celulares = celulares.filter((celular) => {
    return celular.id != id;
  });
  res.send(celulares);
});

module.exports = router;