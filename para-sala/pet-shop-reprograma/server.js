const app = require('./src/app') //caminho app

const PORT = 1313; //caminho da porta

app.listen(PORT, () => {
    console.log(`Servidor tá rodando na porta ${PORT}`);
    }) //pedir pro app olhar pra porta
