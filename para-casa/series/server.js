const app = require("./src/app") // chamar const app
const port = 1313; // chamar a porta que deseja que o servidor rode

//chamar a porta em que o servidor está rodando
app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});