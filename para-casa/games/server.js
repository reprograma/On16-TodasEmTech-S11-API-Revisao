const app = require('./src/app')

const PORT = 7676

app.listen(PORT, () => {
    console.log(`Servidor listening on port ${PORT}`)
})