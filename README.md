<h1 align="center">
    <br>
    <p align="center">Revisão API<p>
</h1>

<h3 align="center">  Turma On16 Todas em Tech - Back-end | S10  </h3>
<br>

## 01. Protocolo HTTP

- *Protocolo de Transferência de Hipertexto* é um protocolo usado dentro do modelo Cliente/Servidor e é baseado em pedidos (_requests_) e respostas (_responses_). 

- É a forma de comunicação entre o Cliente e o Servidor.

- Com o intuito de uniformização dessa comunicação, foram criados alguns *verbos* e *códigos de status* que são usados pelas partes.

- Os *verbos* são um conjunto de métodos de requisição que são responsáveis por indicar uma *ação a ser executada*.

- Os *códigos de status* são as respostas dadas pelo servidor através de números padronizados e agrupados em cinco classes:

<p align="center">
  <img src="https://static.wixstatic.com/media/3e314c_b823f2cdc6ea4e13896c3b4c9723634b~mv2.jpg/v1/fill/w_920,h_556,al_c,q_90/3e314c_b823f2cdc6ea4e13896c3b4c9723634b~mv2.jpg" alt="Códigos de Status HTTP" width="600"/>
</p>

- As requisições são feitas em URLs que possuem uma estrutura específica.

## 02. CRUD

- Cread Read Update Delete = quatro operações básicas de um banco de dados;

- Uma aplicação CRUD é uma aplicação que cria um novo registro, que lê as informações desse registro, que faz atualizações dos dados do registro e que consegue apagar um registro.

<p align="center">
  <img src="https://miro.medium.com/max/1400/1*WLi5VBDcmAQHGDUr9lGThQ.png" alt="CRUD-HTTP" width="600"/>
</p>

## 03. API

- *Interface de Programação de Aplicativos*;

- Cria formas e ferramentas de se usar uma funcionalidade ou uma informação sem realmente ter que "reiventar" tal função.

- Basicamente, dá *instruções sobre como se comunicar com um serviço*.

- Não está, necessariamente, em um link na Web, pode ser uma lib ou um framework, uma função já pronta em uma linguagem específica.

 Exemplos: 
    - YouTube possui uma API para listar vídeos, buscar, ver comentários;
    - O Instagram possui uma API para ver e enviar fotos;
    - O Mercado Livre possui uma API para pesquisar produtos, fazer compras, rastrear pedidos.

## API REST && RESTful

- _Representational State Transfer_

- É uma abstração da arquitetura da Web. Consiste em princípios/regras/constraits que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Permitindo, assim, que as aplicações se comuniquem.

- API REST é uma *forma padronizada de se criar API's baseada no protocolo HTTP*.

- Sistemas que utilizam os princípios REST são chamados de *RESTful*, ou seja, trata-se da capacidade de um determinado sistema aplicar o REST.

- Uma API REST se organiza através de uma coleção de recursos, cada recurso possui um identificador único e imutável (id) e os recursos são representados como JSON.

## 04. Parâmetros

- Tanto o body quanto o query e o params são parâmetros enviados na requisição e podem ser acessados pelo servidor com o objetivo de definir a requisição e as ações.

* ```request.query:``` NÃO faz parte do URL e é passado no formato **key=value**. Esses parâmetros devem ser definidos pela desenvolvedora da API. É usado para pesquisa simples, enviado diretamente na rota.

###### Exemplo
**GET /livros/findByYear?year=2000**

* ```request.params:``` são partes variáveis de um caminho de URL. Tipicamente usados para apontar para um recurso específico dentro de uma coleção, como um usuário identificado por ID. Um URL pode ter vários parâmetros de caminho, cada um denotado com chaves {}.

###### Exemplo
**GET livros/{id}**

* ```request.body:``` é utilizado para enviar dados que serão cadastrados no banco de dados. Podem ser combinados com query ou path params.

###### Exemplo
**{"favorited": true}**

## 05. Verbos HTTP

### GET

- Usa-se GET para ler ou recuperar um recurso. 

- Um GET bem sucedido retorna uma resposta contendo as informações solicitadas.

###### Exemplo
* Pode-se usar um GET para recuperar livros escritos por um autor específico.

        **GET /autor/:idautor/livros**

### POST

- Utiliza-se o POST para criar um novo recurso. Uma solicitação POST requer um corpo (_body_) no qual você define os dados da entidade a ser criada.

- Um POST bem sucedido retorna um código de resposta **201**.

###### Exemplo
* Pode-se usar o POST para adicionar um livro.

        **POST /livros
        {
            "id": idDoNossoLivro,
            "title": "tituloLivro",
            "autor": "autorLivro",
            "description": "descricaoLivro"
        }

### PUT E PATCH

- Responsáveis por atualizar os dados de um registro.

- O ```PUT``` substitui todo o objeto que se deseja modificar, já o ```PATCH``` modifica apenas uma propriedade dentro desse objeto.

~~~JSON
"nome":"may",
"idade": 16,
"cor": "azul"
~~~

- No exemplo, ao usar ```PUT``` para alterar a **idade** para 21, todo o objeto seria alterado para apenas:

~~~JSON
"idade":21
~~~

- Mas, ao utilizar o ```PATCH``` apenas a propriedade **idade** seria atualizado:

~~~JSON
"nome":"may",
"idade": 21,
"cor": "azul"
~~~

- Usa-se o ```PUT```, muitas vezes, pela performance que ele tem quando relacionado ao banco de dados. Substituir um dado inteiro é mais rápido do que somente uma propriedade dele.

|  VERBO  |  TIPO DE ATUALIZAÇÃO  |
| ------ | ------ |
|  PUT  |  **Atualização integral** do recurso  |
|  PATCH  |  **Atualização parcial** do recurso   |

### DELETE

- Utiliza-se para remover um recurso ou uma coleção de recursos.

## 06. Arquitetura MVC

- _Model View Controller_

- É um padrão de arquitetura de software que separa a aplicação em 3 camadas.
* Camada de **interação com o usuário** (_view_) -> parte visual (front);
* Camada de **manipulação de dados** (_model_);
* Camada de **controle** (_controller_) -> onde será organizada toda a lógica;

- Em suma, o MVC é uma forma de **organizar** o código.

###### Exemplo

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

```server.js:``` configura a porta e inicia o servidor;
```app.js:``` indica as rotas e as requisições;
```musicRoutes.js:``` cria rotas e verbos (**PASTA ROUTES**);
```musicController.js:``` cria lógica (**PASTA CONTROLLER**);
```music.json:``` realiza o armazenamento dos dados (**PASTA MODEL**).