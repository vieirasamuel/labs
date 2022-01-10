# JWT Auth

> Essa é uma prova de conceito de autenticação utilizando Node,  Express, JWT,   BCrypt, UUID, Dotenv, Sequelize e PostgreSQL no backend.

## Table of Content

  - [1. How to Setup](#how-to-setup)
  - [2. Enviroment Variables](#enviroment-variables)
  - [3. Endpoints](#endpoints)
    - [3.1. Register](#register)
    - [3.2. Auth](#auth)
    - [3.3. Get](#get)
    - [3.4. List](#list)
  
## How to Setup

Para instalar, faça o download do projeto.

```
https://github.com/vieirasamuel/labs.git
```
Em seguida, instale as dependências:

```sh
# install dependencies
$ npm install

# if you are using yarn
$ yarn
```

Crie o arquivo .env e configure as variáveis de ambiente do projeto com base no arquivo .env.example. Você encontra mais sobre as variáveis de ambiente abaixo.

Para o sequelize criar o banco de dados, execute o comando abaixo:

```sh
# create schema
$ npx sequelize db:create

# if you are using yarn
$ yarn sequelize db:create
```

Em seguida, execute as migrations para criar as tabelas do banco de dados.

```sh
# run migrations
$ npx sequelize db:migrate

# if you are using yarn
$ yarn sequelize db:migrate
```

Para rodar o projeto, execute o comando abaixo:

```sh
# run the project
$ npm start

# if you are using yarn
$ yarn start
```

## Enviroment Variables

- `ACCESS_TOKEN_SECRET`: é a chave utilizada para realizar a criptografia dos tokens.
- `PEPPER`: é a string que será unida a senha fornecida na requisição de cadastro de um novo usuário antes de efetuar a criptografia.
- `PORT`: define a porta que o servidor irá utilizar.
- `DB_DIALECT`: configura o sequelize para o tipo de banco especificado.
- `DB_USER`: usuário do banco de dados.
- `DB_PASSWORD`: senha do banco de dados.
- `DB_URL`: indica a url do banco de dados.
- `DB_SCHEMA`: indica ao sequelize o banco de dados que será utilizado.

## Endpoints

### Register

Registra um novo usuário no sistema.

**POST** `http://localhost:4000/users/register`

```json
{
  "name": "My Name",
  "email": "my@email.com",
  "password": "mypassword"
}
```

### Auth

Autentica o usuário no sistema.

**POST** `http://localhost:4000/users/auth`

```json
{
  "email": "my@email.com",
  "password": "mypassword"
}
```

### Get

Retorna a busca por um usuário no sistema.

**GET** `http://localhost:4000/users/get`

```json
{
  "uuid": "my-uuid"
}
```

O Header precisa conter o **Bearer Token** fornecido ao autenticar no sistema utilizando o Endpoint **Auth**.

### List

Retorna todos os usuários no sistema.

**GET** `http://localhost:4000/users/list`

O Header precisa conter o **Bearer Token** fornecido ao autenticar no sistema utilizando o Endpoint **Auth**.
