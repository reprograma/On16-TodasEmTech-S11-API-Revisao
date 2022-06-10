const app = require("./src/app") 

const PORT = 2020 

app.listen(PORT , ()=>{
    console.log(`Servidor está rodando na porta ${PORT}`)
})