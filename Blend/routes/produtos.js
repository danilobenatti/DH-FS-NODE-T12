let express = require('express');
let router = express.Router();
let ProdutoController = require('../controllers/ProdutoController');

router.get('/criar', ProdutoController.viewForm);
router.post('/criar', ProdutoController.saveForm);
router.get('/sucesso', ProdutoController.sucesso);

module.exports = router;