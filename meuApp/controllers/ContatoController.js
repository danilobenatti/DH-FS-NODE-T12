const ContatoController = {
    index: (req, res) => {
        res.render('contato', {title: 'Contato'}); // renderiza a página contato.ejs
    }
};

module.exports = ContatoController;