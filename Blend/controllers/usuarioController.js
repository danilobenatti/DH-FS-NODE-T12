const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

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
        let { nome, email, senha } = req.body;
        let { files } = req;
        let senhaCrypt = bcrypt.hashSync(senha, 10); // <= gera senha criptografada.
        let usuario = JSON.stringify({nome, email, senha: senhaCrypt, imagem: files[0].originalname}); // <= converte para JSON.
        fs.writeFileSync(usuarioJson, usuario);
        res.send('Usuario cadastrado com sucesso!');
    },

    loginForm: (req, res) => { // <= GET
        res.render('login');
    },
    logarUsuario: (req, res) => { // <= POST
        let { email, senha } = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo); // <= converte para String.
        if (email != usuarioSalvo.email) {
            return res.send('E-mail Inválido!');
        }
        if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
            return res.send('Senha Inválida!');
        }
        res.redirect('/produtos');
    }
}
module.exports = UsuarioController;