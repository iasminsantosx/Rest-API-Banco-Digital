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

<img src="https://drive.google.com/file/d/1Uv0cgH6JvFFhXQp1htMm16c5q1VFF7-5/view?usp=drive_link" width="200" />

- POST /contas - Cadastra uma conta no Banco.

<img src="https://drive.google.com/file/d/1jWdcZ2MzKS4dcmFzByE-AypXLxxv9JMB/view?usp=drive_link" width="200" />

- DELETE /contas/:numeroConta - Remove a conta do banco.

<img src="https://drive.google.com/file/d/1lsaAqiCuocthUC4noQX0SS11yAs-P7m1/view?usp=drive_link" width="200" />

- PUT /contas/:numeroConta/usuario - Atualiza dados de uma conta existente.

<img src="https://drive.google.com/file/d/1r7eQ_E3nC4ifIAkUvj9E0Yzf3t5aNu_Y/view?usp=drive_link" width="200" />

#### As rotas a baixo, precisam no body a especificação do numero da conta e do valor em centavos da transação.

- POST /transacoes/depositar - Deposita valor em centavos na conta desejada.

<img src="https://drive.google.com/file/d/1C8UyAYe5Jn_4jbldJVLnK-SeSdpV6tkB/view?usp=drive_link" width="200" />

- POST /transacoes/saque - Saca valor em centavos da conta desejada.

<img src="https://drive.google.com/file/d/1wBW1jF0W_89_XTC1eIdhetUX-cHBbGHy/view?usp=drive_link" width="200" />

- POST /transacoes/transferir - Tranfere valor em centavos entre duas contas.

<img src="https://drive.google.com/file/d/1Ld3UtnheN05JyQivyEvWa1nbMZIZ6kxM/view?usp=drive_link" width="200" />

#### As rotas a baixo, precisam da passagem da senha específica da conta pela url:

- GET /transacoes/saldo - Vizualização do saldo  da conta em centavos.

<img src="https://drive.google.com/file/d/1kZA2mRDioPJE4czNTihQyMk-IfhcHAsS/view?usp=drive_link" width="200" />

- GET /transacoes/extrato - Vizualização do extrato detalhado  da conta em centavos.

<img src="https://drive.google.com/file/d/1u7gV6yULFwxMgJy-klOhuBZK1UjYJZAB/view?usp=drive_link" width="200" />


## :technologist: Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/jessicamedeirosp"><img src="https://avatars.githubusercontent.com/iasminsantosx" width="50px;" alt=""/><br /><sub><b>Iasmin</b></sub></a><br /></td> 
  </tr>
</table>