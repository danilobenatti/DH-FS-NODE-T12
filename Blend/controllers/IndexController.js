let IndexController = {
    viewContato: (req, res) => {
        // res.send(req.query); // retorna um objeto JSON
        // let {nome, idade} = req.query; // capturando valores .../contato?nome:teste&idade=22
        // res.send('Olá '+ nome +' sua idade é '+ idade);
        let {nome, idade} = req.query;
        res.render('contato', {nomeUsuario: nome, idadeUsuario: idade});
    },
    confirmarContato: (req, res) => {
        let {nome, idade, email} = req.query;
        res.send('Recebido com sucesso! '+ nome +' '+ idade +' '+ email);
    }
}

module.exports = IndexController;