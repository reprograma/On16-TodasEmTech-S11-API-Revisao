const app = require("./src/app")
const port = 1919;

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});