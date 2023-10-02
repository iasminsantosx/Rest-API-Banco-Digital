let { contas, saques, depositos, transferencias } = require('../bancodedados');

const depositar = (req,res) => {

    const { numero_conta, valor} = req.body;
    const agora = new Date();

    if(!numero_conta || numero_conta==="" || !valor || valor===""){
        return res.status(400).json({mensagem: 'O número da conta e o valor são obrigatórios!'});

    }

    if(valor<=0){
        return res.status(400).json({mensagem: 'O valor deve ser válido para depósito!'});
    }

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }
    
    else{

        conta.saldo += valor;

        const deposito = {
            "data": agora.toLocaleString('pt-BR', { timezone: 'UTC' }),
            "numero_conta":numero_conta,
            "valor":valor
        }

        depositos.push(deposito);

        return res.status(200).send();
    }

}

const sacar = (req,res) => {

    const { numero_conta, valor, senha } = req.body;
    const agora = new Date();

    if(!numero_conta || numero_conta==="" || !valor || valor==="" || !senha || senha === ""){
        return res.status(400).json({mensagem: 'O número da conta, valor e a senha são obrigatórias!'});

    }

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }

    if(valor<=0){
        return res.status(400).json({mensagem: 'O valor não pode ser menor que zero!'});
    }

    else if ( valor > conta.saldo){
        return res.status(400).json({mensagem: 'Saldo insuficiente'});
    }
    
    else{

        conta.saldo -= valor;

        const saque = {
            "data": agora.toLocaleString('pt-BR', { timezone: 'UTC' }),
            "numero_conta":numero_conta,
            "valor":valor
        }

        saques.push(saque);

        return res.status(200).send();
    }
}

const saldo = (req,res) => {

    const { numero_conta } = req.query;
    
    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta);
    });

    return res.status(200).json({saldo: conta.saldo});

}

const transferir = (req,res) => {


    const { numero_conta_origem, numero_conta_destino, valor } = req.body;
    const agora = new Date();

    const conta_origem = contas.find((conta_origem) =>{
        return conta_origem.numeroConta === Number(numero_conta_origem);
    });

    const conta_destino = contas.find((conta_destino) =>{
        return conta_destino.numeroConta === Number(numero_conta_destino);
    });

    if (!conta_destino){
        return res.status(404).json({mensagem: 'Conta destino não encontrada.'});
    }
    else if( conta_origem.saldo < valor){
        return res.status(400).json({mensagem: 'Saldo insuficiente'});
    }else{

        conta_origem.saldo -= valor;
        conta_destino.saldo += valor;

        const transferencia = {
            "data": agora.toLocaleString('pt-BR', { timezone: 'UTC' }),
            "numero_conta_origem": numero_conta_origem,
            "numero_conta_destino": numero_conta_destino,
            "valor":valor
        }

        transferencias.push(transferencia);

        return res.status(200).send();
    }
}

const extrato = (req,res) =>{

    const { numero_conta, senha } = req.query;

    if(!numero_conta || numero_conta==="" || !senha || senha === ""){
        return res.status(400).json({mensagem: 'O número da conta, valor e a senha são obrigatórias!'});

    }

    const transferencias_recebidas = transferencias.filter((transferencia)=>{
        return transferencia.numero_conta_origem !== Number(numero_conta);
    })

    const transferencias_enviadas = transferencias.filter((transferencia)=>{
        return transferencia.numero_conta_destino !== Number(numero_conta);
    })

    return res.status(200).json({
        "depositos":depositos,
        "saques":saques,
        "transferenciasEnviadas": transferencias_enviadas,
        "transferenciasRecebidas": transferencias_recebidas
    });
}

module.exports = {
    depositar,
    sacar,
    saldo,
    transferir,
    extrato
}