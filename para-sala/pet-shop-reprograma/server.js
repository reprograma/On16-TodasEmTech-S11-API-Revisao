// Antes de tudo:

// 1- npm init -y (cria o package.json)
// 2 - npm i express (instala o express)
// 3- npm install --save-dev nodemon (instala o nodemon)
// 4- Cria o .gitignore dentro da pasta pet-shop-reprograma
// 5- npm i fs (instala o fs: ele vai alterar os dados no nosso banco de dados)

const app = require('./src/app')

const PORT = 1302;

app.listen(PORT, () => {
    console.log(`Servidor tá rodando na porta ${PORT}`);
    })
