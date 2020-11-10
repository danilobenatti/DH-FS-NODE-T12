const path = require("path");

module.exports = {

    /* index(req, res) {
        res.send('Você está na home page');
    }, */

    index(req,res) {
        //let pathFile = __dirname + '/teste.html';
        //res.send(x);
        //res.sendFile(path.join(__dirname + '/teste.html'));
        res.sendFile(__dirname + '/teste.html');
    },

    postIndex(req,res) {
        res.send(req.body);
    },

    cumprimentar(req, res) {
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers.host);
        console.log(res.statusCode);
        let { nome } = req.params;
        res.send('Olá, '+ nome);
    },

    calcular(req, res) {
        let { numero1, numero2 } = req.params;
        if (typeof numero2 !== "undefined") {
            let soma = parseInt(numero1) + parseInt(numero2);
            res.send('A soma dos parâmetros informados é: '+ soma);
        } else {
            res.send('O valor do 1º parâmetro informado é: '+ numero1);
        }
    },

    getQueryParams(req, res) {
        let { nome } = req.params;
        let { sobrenome} = req.query;
        //let {sobrenom e} = req.params;
        res.send('Nome informado na URL: '+ nome +' '+ sobrenome);
    }
};