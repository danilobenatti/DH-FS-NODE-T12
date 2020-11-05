/**
 * npm init -y
 * npm install express --save
 */
const express = require("express");
const app = express();

const routes = require("./routers/routes");

app.use(routes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta: 3000");
});