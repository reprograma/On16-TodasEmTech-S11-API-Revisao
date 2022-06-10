const app = require('./series/src/app') // chamando o arquivo app

const PORT = 1984 // configurando a porta

// iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});

