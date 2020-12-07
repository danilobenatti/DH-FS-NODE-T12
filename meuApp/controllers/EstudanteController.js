const EstudanteController = {
    index: (req, res) => {
        res.render('estudantes', {title: 'Estudantes'}); // renderiza a página estudantes.ejs
    }
};

module.exports = EstudanteController;