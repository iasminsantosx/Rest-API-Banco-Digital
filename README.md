# Rest-API-Banco-Digital
Criação de uma API-Rest com JavaScript e Node.js, auxiliados da biblioteca Express.

<img src="../images/haze-programmer-writing-code-on-laptop-1.png" width="200px" align="right" >
  <p align="left">
Este projeto é uma API de um sistema Bancário com funções de CRUD, Criação, Atualização, Leitura e Remoção.
  </p>

## :man_mechanic: Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express)

## :ladder: Fucionalidades do Projeto

- [ ] Listar Contas
- [ ] Cadastro de Contas
- [ ] Atualização de Dados
- [ ] Remoção de Contas
- [ ] Depósito
- [ ] Saque
- [ ] Transferência
- [ ] Saldo
- [ ] Extrato
  
## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone <urlProjeto>

# 2. Instale as dependências

npm install

# 3. Execute a API

npm run dev
```

## :sassy_man: Endpoints

### Todos esses endpoints necessitam a passagem da senha do Banco pela url:

- GET /contas - Lista todas as contas do Banco.

![Listar Contas](https://drive.google.com/file/d/1LhqyGrPr5j_D0fNS-zKX13WzIQFFjQvG/view?usp=drive_link)

- POST /contas - Cadastra uma conta no Banco.

![Cadastrar Conta](https://drive.google.com/file/d/1EAJtEwJIXp4krUri-MeOcSlApR_U9h84/view?usp=drive_link)

- DELETE /contas/:numeroConta - Remove a conta do banco.

![Deletar Conta](https://drive.google.com/file/d/1iFEzYMGK_7hXQg5Iy2XAJTTXBMStHC_3/view?usp=drive_link)

- PUT /contas/:numeroConta/usuario - Atualiza dados de uma conta existente.

![Atualizar Conta](https://drive.google.com/file/d/1an53MwkTF-qaVIVfnMT8wij9Odri4iaR/view?usp=drive_link)

#### As rotas a baixo, precisam no body a especificação do numero da conta e do valor em centavos da transação.

- POST /transacoes/depositar - Deposita valor em centavos na conta desejada.

![Deposito](https://drive.google.com/file/d/1Z0ty_W9LFIxUZBzX7SSenPDATJviX6_6/view?usp=drive_link)

- POST /transacoes/saque - Saca valor em centavos da conta desejada.

![Saque](https://drive.google.com/file/d/1mPa9Q7N4D9-ueHKaoYbySLS_7ifTzx8z/view?usp=drive_link)

- POST /transacoes/transferir - Tranfere valor em centavos entre duas contas.

![Transferencia](https://drive.google.com/file/d/1PAY72tkr3DZLbb0f4Dj6NiqsDbCSvyJu/view?usp=drive_link)

#### As rotas a baixo, precisam da passagem da senha específica da conta pela url:

- GET /transacoes/saldo - Vizualização do saldo  da conta em centavos.

![Saldo](https://drive.google.com/file/d/1Z2e4wJyteEE91usxyLnnU3WFN0Y2rWCB/view?usp=drive_link)

- GET /transacoes/extrato - Vizualização do extrato detalhado  da conta em centavos.

![Extrato](https://drive.google.com/file/d/1MaK_UpXXrTk9veluGTqcEe_R4bjXsFFy/view?usp=drive_link)


## :technologist: Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/jessicamedeirosp"><img src="https://avatars.githubusercontent.com/iasminsantosx" width="50px;" alt=""/><br /><sub><b>Iasmin</b></sub></a><br /></td> 
  </tr>
</table>