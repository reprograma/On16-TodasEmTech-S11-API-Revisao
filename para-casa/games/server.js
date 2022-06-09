const app = require('./src/app')
const PORT = 1414

// iniciando o server e dando retorno no console
app.listen(PORT, () => {
    console.log(`Play na porta ${PORT}`)
})