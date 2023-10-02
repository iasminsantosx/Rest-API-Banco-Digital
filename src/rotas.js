const express = require('express');
const contas = require('./controladores/contas');
const transacoes = require('./controladores/transacoes');
const { senhaSaque, senhaSaldoExtrato, senhaTransferencia } = require('./intermediario');

const rotas = express();

rotas.get('/contas',contas.listarContas);
rotas.post('/contas',contas.cadastrarConta);
rotas.put('/contas/:numeroConta/usuario',contas.atualizarDados);
rotas.delete('/contas/:numeroConta',contas.deletarConta);

rotas.post('/transacoes/depositar',transacoes.depositar);
rotas.post('/transacoes/sacar',senhaSaque,transacoes.sacar);
rotas.post('/transacoes/transferir',senhaTransferencia,transacoes.transferir);
rotas.get('/transacoes/saldo',senhaSaldoExtrato,transacoes.saldo);
rotas.get('/transacoes/extrato',senhaSaldoExtrato,transacoes.extrato);


module.exports = rotas;