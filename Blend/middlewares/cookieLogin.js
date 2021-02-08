const fs = require('fs');
const path = require('path');
const cookieLogin = (req, res, next) => {

    if (req.cookies.logado != undefined && req.session.usuario == null) {
        let email = req.cookies.logado;
        let usuario = JSON.parse(fs.readFileSync(
            path.join('usuarios.json'), {
                encoding: 'utf8'
            }));
        // Se fosse uma lista de usuários
        // usuario.forEach(element => {
        //     element.email == email
        // });
        if (usuario.email == email) {
            req.session.usuario = usuario;
        }
    }
    next();
}

module.exports = cookieLogin;