REVISAO - SEMANA 11 -  TURMA ON16
<br>
Os slides da aula tão [aqui](https://github.com/reprograma/On16-TodasEmTech-S11-API-Revisao/blob/main/material/revisao.pdf) ❤️

<h1 align="center">
    <br>
    <p align="center">Exercícios<p>
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
