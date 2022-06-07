const app = require('./src/app')

const port = 7575

app.listen(port, () => {
    console.log(`Servidor tá rodando na porta ${port}`)
})