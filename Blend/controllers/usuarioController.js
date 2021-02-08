const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

let usuarioJson = path.join('usuarios.json');

let UsuarioController = {
    registroForm: (req, res) => { // <= GET
        res.render('registroUsuario');
    },
    salvarForm: (req, res) => { // <= POST
        // console.log(req);
        // files: [
        //     {
        //       fieldname: 'imagem',
        //       originalname: 'atencao-teste.jpg',
        //       encoding: '7bit',
        //       mimetype: 'image/jpeg',
        //       destination: 'uploads',
        //       filename: 'atencao-teste.jpg',
        //       path: 'uploads\\atencao-teste.jpg',
        //       size: 35741
        //     }
        //   ]
        //console.log(validationResult(req));
        let listaDeErrors = validationResult(req);
        if (listaDeErrors.isEmpty()) {
            let { nome, email, senha } = req.body;
            let { files } = req;
            let senhaCrypt = bcrypt.hashSync(senha, 10); // <= gera senha criptografada.
            let usuario = JSON.stringify({nome, email, senha: senhaCrypt, imagem: files[0].originalname}); // <= converte para JSON.
            fs.writeFileSync(usuarioJson, usuario);
            res.send('Usuario cadastrado com sucesso!');
        } else {
            //return res.send('Deu error');
            return res.render('registroUsuario', {errors: listaDeErrors.errors});
        }
    },

    loginForm: (req, res) => { // <= GET
        res.render('login');
    },
    logarUsuario: (req, res) => { // <= POST
        let { email, senha, logado } = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo); // <= converte para String.
        if (email != usuarioSalvo.email) {
            return res.send('E-mail Inválido!');
        }
        if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
            return res.send('Senha Inválida!');
        }

        req.session.usuario = usuarioSalvo;

        if (logado != undefined) {
            res.cookie('logado', usuarioSalvo.email, { maxAge:600000 });
        }

        res.redirect('/produtos');
    }
}
module.exports = UsuarioController;