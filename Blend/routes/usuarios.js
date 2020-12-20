var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

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

const usuarioController = require('../controllers/usuarioController');

/* GET users listing */
router.get('/criar', usuarioController.registroForm);
router.post('/criar', upload.any(), usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);


module.exports = router;
