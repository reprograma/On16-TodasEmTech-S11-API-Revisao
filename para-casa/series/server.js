const app = require("./src/app")

const PORT = 1313

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})