var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController')
const PizzasController = require('../controllers/PizzasController')

/* GET home page. */
router.get('/', IndexController.showIndex);

router.get('/sobre', IndexController.showSobre);

router.get('/pizzas/:id', PizzasController.getPizza);

module.exports = router;
