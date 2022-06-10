// No server, se configura a porta
//"Quero que use esse app, que está em"
const app = require('./src/app')

//confugura a porta
const PORT = 1313;

app.listen(PORT, () => {
    console.log(`Servidor tá rodando na porta ${PORT}`);
})