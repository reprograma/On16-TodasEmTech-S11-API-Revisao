const app = require("./src/app")
const port = 9898

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
})