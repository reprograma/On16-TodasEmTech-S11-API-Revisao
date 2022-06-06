// centralizando a aplicação

// invocando o express
const express = require("express") 
// vamos criar uma rota raiz para ser usada pelo app
const petRoutes = require("./router/petsRoutes")
// executo o express
const app = express() 

// peço para bodyparsear, para manipular os dados do json com graça
app.use(express.json()) 

// criar uma rota raiz e nela usamos as rotas importadas de petRoutes.js
app.use("/petshop", petRoutes)


// exportando para dar acesso
module.exports = app