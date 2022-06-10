<h1 align="center">
    <br>
    <p align="center">Projeto S11 - API Games e Séries 🚀 <p>
</h1>
<p align="center">
<img src= "material\image\cat.gif" width="50%" height="30%"/>
</p>
<p align="center">
 
</p>

### Projeto de Revisão API - Semana 11:

O projeto da Semana 11 é uma API REST criada para o curso da {Reprograma}

A interface é um CRUD, onde é possível listar as séries/games na base de dados; listar games através do ID; listar séries através de um gênero específico ; listar as séries através de um ID; cadastrar novas séries/games; atualizar um game específico; alterar séries/games favoritadas; deletar séries/games específicos.

**E Como funciona?** 💬

1. Clone o projeto através do comando:
`$git clone https://github.com/louicosta/On16-TodasEmTech-S11-API-Revisao`

2. Inicialize o package.json com todas as configurações do projeto através dos comandos: </p>
`$npm install` </p>
`$npm i express`

4. Inicialize o Nodemon com o comando `npm start` para que você possa executar os testes localmente.


### Recursos e tecnologias utilizadas para a construção da API:

* **Node.Js** - versão 14.17.0;
* Dependências Node.Js:
   * **Express** - versão 4.18.1;
   * **Nodemon** - versão 2.0.16;
* **Git**;
* **Visual Studio Code**;
* **Postman**;


### Testando as rotas na sua máquina:

1. Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR);

2. Teste as rotas usando esta rota raiz na URL do Postman: localhost:7676/games/ ou localhost:7878/series/

3. As rotas/endpoints estão disponiveis na pasta 📁- routes 

4. Para utilizar as rotas de *POST, PUT e PATCH* deve-se usar no Postman os verbos de acordo e, clicar em *body* e posteriormente em *raw*, trocar de *text* para *JSON* e apertar *Send*.


<img width="500" src= "material/image/postman%201.png"/>

### Estrututura de Arquivos da API:

```
├─📁games
│  ├─📁src
│    ├──📁controllers
|    |  ├── gamesController.js
│    ├──📁models
|    |  ├── games.json
│    ├──📁routes 
│    |  ├── gamesRoutes.js
|    ├── app.js
├─── .gitignore
├─── package-lock.json
├─── package.json
├─── server.js
```

```
├─📁series
│  ├─📁src
│    ├──📁controllers
|    |  ├── seriesController.js
│    ├──📁models
|    |  ├── series.json
│    ├──📁routes 
│    |  ├── seriesRoutes.js
|    ├── app.js
├─── .gitignore
├─── package-lock.json
├─── package.json
├─── server.js
```

</br>

### Manipulação das Rotas de Games:

| Método HTTP | Endpoint                     | Descrição                                     |
| ----------- | ---------------------------- | --------------------------------------------- |
| ROTA RAIZ   | `/games`                     | Utilizada antes de todo endpoint              |
| GET         | `/games`                     | Retorna todos os games                        |
| GET         | `/games/:id`                 | Retorna um game por id                        |
| POST        | `/add`                       | Cadastra um novo game                         |
| PUT         | `/change/:id`                | Altera um game por id                         |
| PATCH       | `/update/:id/liked`          | Altera a tag liked de um game                 |
| DELETE      | `/delete/:id`                | Remove um game específico                     |

</br>

### Manipulação das Rotas de Series:

| Método HTTP | Endpoint                              | Descrição                                     |
| ----------- | --------------------------------------| --------------------------------------------- |
| ROTA RAIZ   | `/series`                             | Utilizada antes de todo endpoint              |
| GET         | `/series`                             | Retorna todas as séries                       |
| GET         | `serie/search`                        | Retorna apenas uma série por gênero           |
| GET         | `/series/:id`                         | Retorna apenas uma série por id               |
| POST        | `/add`                                | Cadastra uma nova série                       |
| DELETE      | `/delete/:id`                         | Remove uma série específica                   |
| PATCH       | `/liked`                              | Altera a tag liked de uma série               |
| POST        | `/serie/:id/season/:seasonId/episode` | Cadastra um novo episódio                     |
</br>


</br>
</br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2> 

</span>

<p align="center">
<img src="material\image\simpsons.gif" width="70%" height="70%"/>
</p>
<p align="center">
  <a> 