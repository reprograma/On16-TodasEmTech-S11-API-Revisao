// para que meu servidor acesse o app
const app = require('./src/app')

// variável pra guardar a porta
const PORT = 1313

// servidor, deixa a gira girar
app.listen(PORT, () => 
{
    console.log(`
    =================================
           ${PORT} rodando!
    =================================
    `)
})