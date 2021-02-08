var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const logDBMiddleware = require('../middlewares/logDB');
const { check, validationResult, body } = require('express-validator');

/**
 * fonte: https://www.npmjs.com/package/multer#diskstorage
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('uploads')) // <= pasta UPLOADS na "/"(raiz).
    },
    filename: function (req, file, cb) { // <= indica nome que será salvo no server
        // console.log(file);
        // cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.originalname);
    }
  })
   
var upload = multer({ storage: storage })
/** FIM do trecho de código para multer */

const usuarioController = require('../controllers/UsuarioController');

/* GET users listing */
router.get('/criar', usuarioController.registroForm);
router.post('/criar', upload.any(), logDBMiddleware, [
    check('nome').isLength({min:3}).withMessage('Nome deve ter mais que 3 caracteres!'),
    check('email').isEmail().withMessage('Informe e-mail válido!'),
    check('senha').isLength({min:6}).withMessage('Senha deve ter mais que 6 caracters!'),
    body('email').custom((email) => {
        let usuario = JSON.parse(fs.readFileSync('usuarios.json'))
        return usuario.email != email
    }).withMessage('E-mail de usuário já existe!')
], usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);


module.exports = router;
