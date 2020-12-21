const fs = require('fs');

function logSite(req, res, next) {
    fs.appendFileSync('log.txt', '\nO usuário entrou na url: '+ req.url);
    next();
}

// let emManutencao = false;

// app.use(function(req, res, next){
//     if(emManutencao){
//         res.render('em-manutencao');
//     } else {
//         next();
//     }
// });

module.exports = logSite;