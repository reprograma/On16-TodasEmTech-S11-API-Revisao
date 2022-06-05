//Iniciando servidor
const app = require("./src/app")

const PORT = 3030

app.listen(PORT, () => {
	console.log(`Seu servidor está na porta ${PORT}`)
})