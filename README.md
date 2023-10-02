# Rest-API-Banco-Digital
Criação de uma API-Rest com JavaScript e Node.js, auxiliados da biblioteca Express.

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

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/dfbdb07f-f5b2-4fc8-b9c3-50261052e1c6" width="1000" />

- POST /contas - Cadastra uma conta no Banco.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/00d605fb-18df-4ad8-a330-86e4489fb4e8" width="1000" />

- DELETE /contas/:numeroConta - Remove a conta do banco.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/745def5b-ef0c-49a6-855c-b7fd6c120806" width="1000" />

- PUT /contas/:numeroConta/usuario - Atualiza dados de uma conta existente.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/c126e04c-c394-4bf9-ba2f-a613c13a07c1" width="1000" />

#### As rotas a baixo, precisam no body a especificação do numero da conta e do valor em centavos da transação.

- POST /transacoes/depositar - Deposita valor em centavos na conta desejada.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/8a033944-2662-46c7-b309-fec93b05c2d1" width="1000" />

- POST /transacoes/saque - Saca valor em centavos da conta desejada.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/71b3ce15-dab0-453b-a487-8ac179e8d153" width="1000" />

- POST /transacoes/transferir - Tranfere valor em centavos entre duas contas.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/b00eaa51-1270-4d10-a499-582fff9c8e2e" width="1000" />

#### As rotas a baixo, precisam da passagem da senha específica da conta pela url:

- GET /transacoes/saldo - Vizualização do saldo  da conta em centavos.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/acbad44e-6810-4c7f-8fef-a8e0a1a84cc3" width="1000" />

- GET /transacoes/extrato - Vizualização do extrato detalhado  da conta em centavos.

<img src="https://github.com/iasminsantosx/Rest-API-Banco-Digital/assets/60939035/8ae84934-cd79-407f-b0eb-85ac5c6a9d43" width="1000" />


## :technologist: Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/iasminsantosx"><img src="https://avatars.githubusercontent.com/iasminsantosx" width="50px;" alt=""/><br /><sub><b>Iasmin</b></sub></a><br /></td> 
  </tr>
</table>
