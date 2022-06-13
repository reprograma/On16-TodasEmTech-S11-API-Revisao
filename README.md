<img src="para-casa/games/img/banner.gif">


<h1 align="center">
    <br>
    <p align="center">Atividade Semanal 11 - Turma On16 📚 💻<p>
</h1>

<center>

![BuiltWithLove](https://forthebadge.com/images/badges/built-with-love.svg)
<br/>
![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</center>

### Play no projeto:

* Level 1: [sobre nossa API](#sobre)
* Level 2: [a arquitetura MVC do projeto](#mvc)
* Level 3: [organização das rotas](#rotas)
* Game Start: [inicialização do projeto atual](#inicializacao)
   
   
<br/>

<div id='sobre'/> 

## ⭐ Level 1: sobre nossa API

Para esta aplicação criamos algumas rotas utilizando os principais métodos HTTP para manipular uma lista de jogos em JSON. Temos a possibilidade de ler todos os jogos da lista, ler apenas um, adicionar e deletar jogos, além de favoritar ou desfavoritar.

Exemplo de um jogo cadastrado na nossa lista JSON:

```

{
    "id": 2,
    "title": "Mario Kart",
    "launchYear": "1992",
    "consoles": ["superNintendo", "nintendo64", "nintendoSwitch"],
    "liked": true
}

```

* Utilizamos o módulo [fs](https://nodejs.dev/learn/the-nodejs-fs-module) para exercitar o novo conteúdo apresentado em aula e otimizar a funcionalidade do servidor criado, pois conseguiremos ver as manipulações de rota alterando diretamente a lista JSON dentro da nossa pasta Model.

<br/>

<div id='mvc'/> 

## 🏰 Level 2: a arquitetura MVC do projeto

Utilizamos o padrão de projeto MVC, onde o código é dividido em três camadas principais interconectadas (Model-View-Controller).
- Model > Temos os nossos dados e seu formato, é a partir dele que pensamos na lógica e funções;
- Controller > Como as nossas rotas se comportam, qual o tratamento para as requisições e resposta;
- View > Interface do usuário. Como o foco é nossa execução em back-end, não utilizamos a View como interface para usuário.

Demais arquivos e pastas: 

- router > cadastro/lista das rotas
- app.js > rota raíz
- server.js > configuração da porta

```
📂 para-casa
├── 📁 games
├── 📂img
├── 📂src
│   ├── 📂controllers
|       ├── 📃 gamesController.json
│   ├── 📂models
|       ├── 📃 games.json
│   ├── 📂router
│       ├── 📃 gamesRoutes.js
|   ├── 📃 app.js
├── 📃 .gitignore
├── 📃 package-lock.json
├── 📃 package.json
├── 📃 server.js
```
<br/>

<div id='rotas'/> 

## 🍄 Level 3: organização das rotas

Configuração das rotas para manipular a lista de jogos:

| Verbo |                Rota                 |             Descrição da Rota                | Esperado      |
| :---: | :---------------------------------: | :------------------------------------------: |:--------------|
|  📖 GET  |      `localhost:1414/play/games`      |       listar todos os jogos da lista       | <img src="para-casa/games/img/get-all.gif" width="250"> |
| 🔍 GET  |   `localhost:1414/play//games/:id`    |     listar apenas um jogo pelo seu ID      | <img src="para-casa/games/img/get-id.gif" widht="100"> |
| ➕ POST   |      `localhost:1414/play/games`      |         adicionar um jogo na lista         | <img src="para-casa/games/img/post-games.gif" widht="100"> |
| ❌ DELET |    `localhost:1414/play/games/:id`    |        remover um jogo pelo seu ID         | <img src="para-casa/games/img/delete-id.gif" widht="100"> |
| ✏ PATCH | `localhost:1414/play/games/:id/liked` | favoritar/desfavoritar um jogo pelo seu ID | <img src="para-casa/games/img/patch-liked.gif" widht="100"> |

<br/>

<div id='inicializacao'/> 

## ▶ Game Start: inicialização do projeto atual

```
# Clonar o repositório
$ git clone https://github.com/lialaurindo/On16-TodasEmTech-S11-API-Revisao

# Entrar na pasta do repositório
$ cd para-casa/games

# Instalar as dependências
$ npm install

#Executar o servidor
$ npm start
```

Utilizando a porta 1414 no server com endpoint `/play`. Deste modo temos a
rota principal: `localhost:1411/play`

<br/>
---


```
MarioMoji by Lia
                                                                      ☁☁☁☁☁
🕳             ☁☁☁☁
                                               ☁     ☁
                                                            📀📀📀                            ☁☁☁
                                                            🟫🟫🟫🟫

                 📀             ❓                            🍄
                                🟧                       🟫🟧🟫🟧
                                                                                        🟫
                                                                                     🟫🟫
🟩🟩🟩                               🟩🟩                           🕳          🟫🟫🟫    🏁
🟩🟩🟩🟩🟩      🏃‍♂️           🟩🟩🟩🟩🟩🟩🟩            👾  🟩🟩🟩       🟫🟫🟫🟫   🟫🎀🏰
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫

```

---
[🔝 Voltar ao início](#sobre)

<h6 align="center">
    <br>
    <p align="center">Essa atividade faz parte do cronograma da semana 10 da Turma On16 do bootcamp Todas em Tech <p>
    💜 
</h6>
