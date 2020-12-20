const path = require('path');
const fs = require('fs'); // <= pacote "File System"
const bcrypt = require('bcrypt'); // <= pacote: npm install bcrypt --save

// criando um "caminho"(path) no sistema para um arquivo.
let usuariosArquivos = path.join('..','data','usuarios','usuarios.json');
// "usuariosArquivos" é igual a: ../data/usuarios/usuarios.json

let extensao = path.extname(usuariosArquivos);
let diretorio = path.dirname(usuariosArquivos);

//console.log(path);
console.log(usuariosArquivos);
console.log(extensao);
console.log(diretorio);

//console.log(fs);
fs.writeFileSync('bemvindo.txt', 'Olá mundo!'); // <= cria ou sobrescreve o arquivo "bemvindo.txt".
// considere um Objeto Literal
let pessoa = {
    nome: 'Roberta',
    email: 'roberta@gmail.com',
    senha: '123456'
};
// let pessoaJSON = JSON.stringify(pessoa);
// fs.writeFileSync('pessoa.json', pessoaJSON);
fs.writeFileSync('pessoa.json', JSON.stringify(pessoa)); // <= sobrescreve o arquivo.
// fs.writeFile(); // <= é assíncrona. Não bloquei a execução do restante do arquivo js.
// fs.writeFileSync(); // <= é síncrona. Bloqueia a execução do restante do arquivo até conseguir concluir a operação.
// fs.appendFileSync(); // <= adiciona no final do arquivos.

// --- Exercício de Fixação --- //
let caminhoArquivo = path.join('prova.txt');

fs.writeFileSync(caminhoArquivo, "Prova 1\n");
fs.writeFileSync(caminhoArquivo, "Prova 2\n"); // <= sobrescreve o conteúdo anterior
fs.appendFileSync(caminhoArquivo, "Prova final\n"); // <= adiciona ao conteúdo anterior

let conteudo = fs.readFileSync(caminhoArquivo);
console.log(conteudo);
conteudo = fs.readFileSync(caminhoArquivo, {encoding: 'utf-8'});
console.log(conteudo);

// Aula de criptografia de senhas com "bcrypt"
let hash = bcrypt.hashSync('1234567890', 10);
let hash2 = bcrypt.hashSync('1234567890', 10);
console.log('Senha criptografada: '+ hash);
console.log('Senha é 123456?');
console.log(bcrypt.compareSync('123456', hash));
console.log('Senha é 1234567890?')
console.log(bcrypt.compareSync('1234567890', hash));
console.log('Comparando hash e hash2:')
console.log(hash === hash2 ? true : false);