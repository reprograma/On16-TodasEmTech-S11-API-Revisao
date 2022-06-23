# SEMANA 11 DA REPROGRAMA

# Aula Ministrada por Mayhhara

### Revisão geral do contéudo proposto HTTP API's

### O que aprendi?
#### File System "fs"
É um dos principais módulo do NODEjs para trabalhar com arquivos externos no NODEjs e para usar tem que importar o 'fs' salientando que este método também tem  formas síncronas e assíncronas.

SINTAXE:
var fs = require('fs')

#### Método fs.writelife()
É usado para gravar de forma assíncrona os dados especificados em arquivo. Por padrão, o arquivo seria substituído se existir.
SINTAXE:
fs.writeFile( file, data, options, callback )
trago como exemplo um trecho do código deste repositório, segue:
fs.writeFile("./src/models/pets.json", JSON.stringify(pets).
#### Método  JSON.stringify()

- É um método que converte valores em javascript para uma String JSON, ou seja uma função que altera o comportamento do processo de transformação em string ou array de um objetos (String e Number) que serve como uma lista branca para selecionar como propriedades do objeto valor a ser incluido na string JSON.  
SINTAXE:
JSON.stringify(valor[, replacer[, espaço]])

#### Método indexOf
- O indexOf é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1.

É uma função que pode ser encaixada junto com qualquer lógica que precise comparar algum valor, seja dentro de um array ou dentro de uma string.   Abaixo segue  sintaxe distintas
Sintaxe:
array.indexOf(elementoDePesquisa, [pontoInicial = 0]) //para array

string.indexOf(elementoDePesquisa, [pontoInicial = 0]) //para string

#### Método slice()
- O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
Sintaxe:
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
==============================================
Os slides da aula tão [aqui](https://github.com/reprograma/On16-TodasEmTech-S11-API-Revisao/blob/main/material/revisao.pdf) ❤️

<h1 align="center">
    <br>
    <p align="center">Aulinha de Revisão da On16<p>
</h1>

# Simbora, gatinhas?!

Estamos chegando em mais um período de revisão, passa <s>muito</s> rápido, né?

Atentando-se ao fato de sempre validarmos o conteúdo visto até determinado ponto do nosso curso, iremos trabalhar em um projeto desenvolvido por vocês (novamente).

## Por onde começamos?

Vamos relembrar um pouco do que vimos até aqui? Não fique preocupada em decorar todas as sintaxes e códigos existentes no mundo. Isso vem com o tempo, relaxa!

Vamos começar relembrando nossa estrutura de uma maneira geral:

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── index.js
├── server.js
├── package.json
```

Agora vamos relembrar alguns conceitos importantes:

- **M**odel: é responsável pela leitura e escrita de dados, e também de suas validações. É onde está toda a lógica de negócio da aplicação.
- **V**iew: é a camada de interação com o usuário. Ela apenas faz a exibição dos dados, sendo ela por meio de um html ou xml (não usaremos ele, ta?).
- **C**ontroller: O responsável por receber todas as requisições do usuário. Seus métodos chamados actions são responsáveis por uma página, controlando qual model usar e qual view será mostrado ao usuário.

Passo-a-passo com a mão no <s>massa</s> código:

1. Esqueleto do projeto
2. Models
3. Controllers
4. Rotas
5. App.js
6. Server.js

### Postman

Essa ferramenta permite testar serviços RESTful por meio do envio de requisições HTTP e da análise do seu retorno. Você pode salvar todas as suas _collections_ e facilitar o seu dia-a-dia como pessoa desenvolvedora!

### Github

Não podemos esquecer aquele commit bonitão para mostrar todo o esforço de vocês, não é mesmo?

---
