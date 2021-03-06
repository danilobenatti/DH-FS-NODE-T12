/**
 * npm init -y
 * npm install express --save
 */
const express = require("express");
const app = express();

const routes = require("./routers/routes");

app.use(express.json()); /* indica que iremos trabalhar com JSON */
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta: 3000");
});