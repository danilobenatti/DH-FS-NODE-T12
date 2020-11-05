module.exports = {

    index(req, res) {
        res.send('Você está na home page');
    },

    cumprimentar(req, res) {
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