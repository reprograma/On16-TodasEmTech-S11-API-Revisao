const app = require('./src/app')

const port = 1010

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
}) 