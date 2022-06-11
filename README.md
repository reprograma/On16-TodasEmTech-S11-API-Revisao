<h1 align="center">
    <br>
    <p align="center"> 🍿 Projeto S11 - API Games e Séries 🕹️ <p>
</h1>

<!--ts-->
- [Projeto de Revisão API - Semana 11:](#projeto-de-revisão-api---semana-11)
- [⚙️ Instalações necessárias para os testes no Postman](#️-instalações-necessárias-para-os-testes-no-postman)
  - [🧩 Iniciando a API Node.js](#-iniciando-a-api-nodejs)
  - [🧩 Instalando o Express](#-instalando-o-express)
  - [🧩 Instalando o Nodemon](#-instalando-o-nodemon)
  - [🧩 Scripts package.json](#-scripts-packagejson)
  - [🧩 Criando o arquivo .gitignore](#-criando-o-arquivo-gitignore)
- [🕹️ Games](#️-games)
- [🕹️ Postman Games](#️-postman-games)
- [🍿 Séries](#-séries)
- [🍿 Postman Séries](#-postman-séries)
- [🎄 Autora](#-autora)

<!--te-->

 ## Projeto de Revisão API - Semana 11:

O projeto da Semana 11 é uma API REST criada para o curso da {Reprograma}

A interface é um CRUD, onde é possível listar as séries/games na base de dados; listar games através do ID; listar séries através de um gênero específico ; listar as séries através de um ID; cadastrar novas séries/games; atualizar um game específico; alterar séries/games favoritadas; deletar séries/games específicos.
## ⚙️ Instalações necessárias para os testes no Postman

### 🧩 Iniciando a API Node.js

Com o terminal aberto na pasta principal, para iniciar nossa API Nodejs, precisamos inicializar o *package manager*, que é o gerenciador de pacotes do Node. Para isso executaremos ```npm init``` no terminal. Pressionando “Enter”, serão exibidas uma sequência de perguntas que deverão ser preenchidas ou mantidas o valor padrão.

Com isso um arquivo com o nome de package.json será criado. Esse arquivo é muito importante pois define que o nosso projeto como sendo Node.

### 🧩 Instalando o Express

Feito isso, precisaremos instalar o Express no nosso projeto, que é um framework que nos trará facilidades. Para isso executaremos no terminal:

``` npm install express --save ```

Ao rodar a instalação do express, uma *pasta node_modules* com os pacotes do meu projeto será criada. Se reparar, dentro dessa pasta teremos uma pasta chamada “express”. Toda vez que você rodar o comando ``` npm install``` essa pasta node_modules será atualizada com as últimas atualizações conforme o que estiver configurado no arquivo *package.json*.

### 🧩 Instalando o Nodemon

Caso você esteja com o servidor rodando e tente alterar algum arquivo, para que o servidor capte essas alterações será necessário reiniciá-lo manualmente. Porém é bem chato ficar fazendo isso. Para evitar esse tipo de problema, podemos utilizar o *nodemon* para inicializar nosso servidor. Para utilizá-lo, deveremos primeiramente instalá-lo rodando o comando ```npm install nodemon --save```. Com o nodemon instalado, para rodar nosso servidor o utilizando, deveremos utilizar o comando ```nodemon server.js```. Com isso nosso servidor será inicializado com o nodemon e você poderá editar seus arquivos sem precisar reiniciá-lo.

### 🧩 Scripts package.json

Para não precisar ficar escrevendo ```nodemon server.js``` para inicializar o servidor, podemos ir no nosso arquivo *package.json* e editar o atributo "scripts" do json. Poderemos incluir um script de start, informando que quando ele for utilizado, executará o comando ```nodemon server.js```:

```package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```
Dessa forma para inicializar o servidor, basta digitar ```npm start``` no terminal e pressionar enter, que o mesmo já chamará automaticamente o comando ```nodemon server.js```.

### 🧩 Criando o arquivo .gitignore

Devemos criar na raíz do "reprogramafy" o arquivo *.gitignore* e escrever nele ```node_modules/``` para o git nao trackear essa pasta para commit.

## 🕹️ Games

<br>✅ poder listar todos os jogos
<br>✅ poder listar apenas um jogo específico
<br>✅ poder cadastra um novo jogo
<br>✅ poder atualizar um jogo específico
<br>✅ poder deletar um jogo específico
<br>✅ poder atualizar se gostou ou não do jogo

Sendo assim precisaremos criar 7 rotas para músicas:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| GET    | Listar jogos                           |
| GET    | Listar jogo específico                 |
| POST   | Cadastrar um novo jogo                 |
| PUT    | Atualizar um jogo específico           |
| DELETE | Deletar um jogo específico             |
| PATCH  | Atualizar se gostou ou não do jogo     |


## 🕹️ Postman Games


**`GET`** Listar todos os jogos | `localhost:1313/games/lista`;

**`GET`** Listar apenas um jogo específico | `localhost:1313/games/buscargame/1`;

**`POST`** Cadastrar um novo jogo | `localhost:1313/games/cadastrar`;

**`PUT`** Atualizar um jogo específico| `localhost:1313/games/atualizar/1`;

**`DELETE`** Deletar um jogo específico | `localhost:1313/games/deletar/1`;

**`PATCH`** Atualizar se gostou ou não do jogo | `localhost:1313/games/curti/2`;


## 🍿 Séries

<br>✅ poder listar todas as séries
<br>✅ poder listar série de um gênero específico
<br>✅ poder listar uma série em específica
<br>✅ poder adicionar uma nova série
<br>✅ poder deletar uma série específica
<br>✅ Atualizar se gostou ou não da série

Sendo assim precisaremos criar 5 rotas para podcasts:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| GET    | Listar séries                          |
| GET    | Listar série de um gênero específico   |
| GET    | Listar uma série específica            |
| POST   | Cadastrar uma nova série               |
| DELETE | Deletar uma série específica           |
| PATCH  | Atualizar se gostou ou não da série    |


## 🍿 Postman Séries

**`GET`** Listar todas as séries | `localhost:1313/series/lista` ;

**`GET`** Listar série de um gênero específico | `localhost:1313/series/genero?genre=aventura` ;

**`GET`** Listar uma série em específica | `localhost:1313/series/buscaserie/1`;

**`POST`** Adicionar uma nova série | `localhost:1313/series/novaserie`;

**`DELETE`** Deletar uma série específica | `localhost:1313/series/deletar/1`;

**`PATCH`** Atualizar se gostou ou não da série | `localhost:1313/series/liked/2`;



## 🎄 Autora

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFUFLABHg5xfA/profile-displayphoto-shrink_800_800/0/1646500768370?e=1659571200&v=beta&t=ZeyR8RdmYcjcC_Mfr83iTLwkrQT3MR74QzceWIdbWfI" width="100px;" alt="Foto de Perfil de Andreza"/>
 <br/>
</a>


<p align="center">
Desenvolvido por <img alt="in version" src="https://img.shields.io/badge/-Andreza_Pipolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrezapipolo/"> com o apoio da Professora Mayhhara Moraes <p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />
</p></p> <p align="center"></p>





