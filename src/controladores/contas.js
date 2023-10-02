let { contas, numeroConta } = require('../bancodedados');

const listarContas = (req,res) =>{

    return res.status(200).json(contas);
}

const cadastrarConta = (req,res) =>{
   
    const { nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if(!nome || nome==='' || !cpf || cpf==='' || !data_nascimento || data_nascimento==='' || !telefone || telefone==='' || !senha || senha==='' ){
        return res.status(400).json({mensagem: 'O nome, cpf, data de nascimento, telefone e senha são obrigatórios!.'});
    }
    
    const contaCPF = contas.find((conta) =>{
        return conta.cpf === Number(cpf);
    });

    const contaEmail = contas.find((conta) =>{
        return conta.email === email;
    });
    
    if(!contaCPF || !contaEmail) {
        
        const conta = {
            numeroConta: numeroConta++,
            nome: nome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            telefone: telefone,
            email: email,
            senha: senha,
            saldo: 0
        }

        contas.push(conta);
        return res.status(201).send();  
    }else{
        return res.status(400).json({mensagem: 'Já existe uma conta com o cpf ou e-mail informado!'});
    }    

}

const atualizarDados = (req,res) =>{

    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    let conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numeroConta);
    });

    if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }

    if(!nome || nome==='' || !cpf || cpf==='' || !data_nascimento || data_nascimento==='' || !telefone || telefone==='' || !senha || senha==='' ){
        return res.status(400).json({mensagem: 'O nome, cpf, data de nascimento, telefone e senha são obrigatórios!.'});
    }
 

    const contaCPF = contas.find((conta) =>{
        return conta.cpf === Number(cpf);
    });

    const contaEmail = contas.find((conta) =>{
        return conta.email === email;
    });
    
    if(!contaCPF || !contaEmail) {
        
        conta = {
            nome: nome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            telefone: telefone,
            email: email,
            senha: senha,
            saldo: 0
        }
        return res.status(204).send();  

    }else{
        return res.status(400).json({mensagem: 'Já existe uma conta com o cpf ou e-mail informado!'});
    }
}

const deletarConta = (req,res) =>{

    const { numeroConta } = req.params

    const conta = contas.find((conta) =>{
        return conta.numeroConta === Number(numeroConta);
    });

    if(isNaN(numeroConta)){
        return res.status(400).json({mensagem: 'Numero da Conta deve ser um número válido.'});
    }

    else if(!conta){
        return res.status(404).json({mensagem: 'Conta não encontrada.'});
    }
    
    else if(conta.saldo>0){
        return res.status(400).json({mensagem: 'A conta só pode ser removida se o saldo for zero!'});
    }

    contas = contas.filter((conta)=>{
        return conta.numeroConta !== Number(numeroConta);
    })

    return res.status(200).send();
}

module.exports = {
    listarContas,
    cadastrarConta,
    atualizarDados,
    deletarConta
}