const produtos = require('../database/produtos');

const fs = require('fs');
/**
 * Os métodos de escrita de arquivo do "File System" só podem
 * receber conteúdo que seja do tipo "string".
 */
const path = require('path');
const produtosJson = path.join('produtos.json'); // <= indica o arquivo a ser criado.

let ProdutoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    saveForm: (req, res) => {
        //console.log(req.body);
        //---
        let { nomeProduto, precoProduto } = req.body; // <= informações via POST transitam no atributo "body" da requisição.
        // res.send('O produto '+ nomeProduto +' custa '+ precoProduto);
        // "nomeProduto" e "precoProduto" são definidos nas tags "name" dos inputs do formulário "produto.ejs".
        //---
        // Após a lógica ser implementada usar o método "redirect" na resposta.

        // <= o método "JSON.stringify" converte um objeto literal em texto(string)
        // let dadosJson = JSON.stringify({nomeProduto, precoProduto});
        // fs.writeFileSync(produtosJson, dadosJson);
        // fs.writeFileSync(produtosJson, JSON.stringify({nomeProduto, precoProduto}));
        fs.writeFileSync(produtosJson, JSON.stringify([{nome: nomeProduto, preco: precoProduto}]));
        /**
         * Desafio: alterar para "appendFileSync" para que os dados atuais sejam
         * mandidos após novas inserções de dados.
         */
        
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
        // let produtos = [
        //     {id: 1, nome: 'Produto X', preco: 10},
        //     {id: 2, nome: 'Produto Y', preco: 20},
        //     {id: 3, nome: 'Produto Z', preco: 30}
        // ]
        // let produtos = fs.readFileSync(produtosJson, {encoding: 'utf-8'});
        // produtos = JSON.parse(produtos);
        let produtos = JSON.parse(fs.readFileSync(produtosJson, {encoding: 'utf-8'}));
        /**
         * renderiza a página "listaProdutos.ejs".
         * passando a lista de objetos "listaProdutos".
         */
        res.render('listaProdutos', { listaProdutos: produtos });
    },
    deletar: (req, res) => {
        let { id } = req.params;
        // rotina para apagar um registro no BD.
        res.send('Deletando o produto: '+ id);
    }
}

module.exports = ProdutoController;