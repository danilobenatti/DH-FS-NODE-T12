const produtos = require('../database/produtos');

let ProdutoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    saveForm: (req, res) => {
        //console.log(req.body);
        //---
        //let { nomeProduto, precoProduto } = req.body; // <= informações via POST transitam no atributo "body" da requisição.
        //res.send('O produto '+ nomeProduto +' custa '+ precoProduto);
        //---
        // Após a lógica ser implementada usar o método "redirect" na resposta.
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res) => {
        res.render('sucesso');
    },
    viewAttForm: (req, res) => {
        let { id } = req.params; // <= obtendo parâmetro por desestruturação "let { ... } = req.params"
        //res.send("Editando o produto id: " + id);
        res.render('editarProduto', { produto: produtos[id] });
    },
    editar: (req, res) => {
        let { nomeProduto, precoProduto } = req.body; 
        res.send('Produto: '+ nomeProduto +'($'+ precoProduto +') foi editado.');
    },
    listar: (req, res) => {
        res.render('listaProdutos', { listaProdutos: produtos });
    },
    deletar: (req, res) => {
        let { id } = req.params;
        res.send('Deletando o produto: '+ id);
    }
}

module.exports = ProdutoController;