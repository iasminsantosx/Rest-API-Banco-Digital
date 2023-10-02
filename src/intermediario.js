const { contas } = require('./bancodedados')

const validarSenha = (req,res,next) =>{
    const { senha_banco } = req.query;

    if(!senha_banco){
        return res.status(401).json({mensagem: 'Senha não informada.'});
    }
    if(senha_banco !== "Cubos123Bank"){
        return res.status(401).json({mensagem: 'A senha do banco informada é inválida!'})
    }

    next();
}

const senhaSaque = (req,res,next) => {

    const { senha, numero_conta } = req.body;

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }

    if(!senha){
        return res.status(401).json({mensagem: 'Senha não informada.'});
    }

    if(senha !== conta.senha ){
        return res.status(401).json({mensagem: 'A senha da conta informada é inválida!'})
    }

    next();
}

const senhaSaldoExtrato = (req,res,next) => {

    const { senha, numero_conta } = req.query;

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }

    if(!senha){
        return res.status(401).json({mensagem: 'Senha não informada.'});
    }

    if(senha !== conta.senha ){
        return res.status(401).json({mensagem: 'A senha da conta informada é inválida!'})
    }

    next();
}

const senhaTransferencia = (req,res,next) => {

    const { senha, numero_conta_origem } = req.body;

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numero_conta_origem);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }

    if(!senha){
        return res.status(401).json({mensagem: 'Senha não informada.'});
    }

    if(senha !== conta.senha ){
        return res.status(401).json({mensagem: 'A senha do banco informada é inválida!'})
    }

    next();
}

module.exports = {
    validarSenha,
    senhaSaque,
    senhaSaldoExtrato,
    senhaTransferencia
};