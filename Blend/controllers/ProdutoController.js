let ProdutoController = {
    viewForm: (req,res) => {
        return res.render('produto');
    },
    saveForm: (req,res) => {
        //console.log(req.body);
        let { nomeProduto, precoProduto } = req.body;
        //res.send('O produto '+ nomeProduto +' custa '+ precoProduto);
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req,res) => {
        res.render('sucesso');
    }
}

module.exports = ProdutoController;