function auth(req, res, next) {
    if (typeof(req.session.usuario) != 'undefined') {
        return next();
    }
    return res.send('Você precisa estar logado!');
}

module.exports = auth;