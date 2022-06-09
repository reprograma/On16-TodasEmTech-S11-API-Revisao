const app = require('./src/app')

const port = 2022

app.listen(port, () => {
    console.log(`Servidor está na porta ${port}`);
})
