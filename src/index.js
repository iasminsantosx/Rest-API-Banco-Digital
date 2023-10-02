const express = require('express');
const rotas = require('./rotas');
const { validarSenha } = require('./intermediario');


const app = express();

app.use(express.json());

app.use(validarSenha);

app.use(rotas);

app.listen(3000);