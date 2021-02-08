let express = require('express');
let router = express.Router();
let auth = require('../middlewares/auth');
let ProdutoController = require('../controllers/ProdutoController');

// route que envia um formulário para a visualização -> GET
// router.get('/filme/criar', (req, res) => {res.render('criar')});
// route que processa a informação do formulário -> POST
// router.post('/filme/criar', (req, res) => {console.log("...")});

router.get('/criar', ProdutoController.viewForm); // <= rotas com mesmo nome mas métodos diferentes
router.post('/criar', ProdutoController.saveForm); // <=
router.get('/sucesso', ProdutoController.sucesso);
router.get('/:id/editar', ProdutoController.viewAttForm);
router.put('/editar', ProdutoController.editar);
router.get('/', auth, ProdutoController.listar);
router.delete('/deletar/:id', ProdutoController.deletar);

module.exports = router;