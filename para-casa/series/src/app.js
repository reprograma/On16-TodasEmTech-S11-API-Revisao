// central da aplicação aqui

// invocando o express pra agir
const express = require("express") 

// vamos criar uma rota raiz para ser usada pelo app
const seriesRoutes = require("./router/seriesRoutes")

// executo o express usando app
const app = express() 

// peço para bodyparsear, assim posso manipular os dados do json com graça
app.use(express.json()) 

// para usar, configuro ("seto") uma rota raiz e nela usamos as rotas importadas de seriesRoutes.js
app.use("/serie", seriesRoutes)


// exportando para dar acesso
module.exports = app