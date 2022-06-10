const app = require('./src/app')

const PORT = 7878

app.listen(PORT, () => {
    console.log(`Servidor listening on port ${PORT}`)
})