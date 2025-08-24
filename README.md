# Template Node.js + TypeScript

Um **template base** para projetos Node.js com **TypeScript**, contendo autenticação com **JWT + hash**, sistema de **login/register** e um CRUD completo de usuário.
Além disso, segue boas práticas de arquitetura, utilizando **Design Patterns** organizados em:

`config/`, `controller/`, `middleware/`, `repositories/`, `routes/`, `services/`, `tests/`, `types/`.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)](https://jwt.io/)
[![Bcrypt](https://img.shields.io/badge/Bcrypt-0F2D3C?style=for-the-badge)](https://www.npmjs.com/package/bcrypt)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge\&logo=swagger\&logoColor=white)](https://swagger.io/)

## Features

* Login e Registro de usuário com **JWT**
* Hash de senha com **bcrypt**
* CRUD completo de usuários
* Estrutura escalável e organizada por camadas
* Arquitetura baseada em boas práticas (Clean Architecture inspired)
* Testes automatizados
* Documentação com **Swagger**

---

## Estrutura de Pastas

```
src/
 ├── config/          # Configurações gerais (DB, JWT, etc)
 ├── controllers/     # Camada de controle (recebe as requests e chama os services)
 ├── middleware/      # Middlewares (auth, error handler, etc)
 ├── repositories/    # Comunicação com banco de dados
 ├── routes/          # Definição das rotas da API
 ├── services/        # Regras de negócio
 ├── tests/           # Testes automatizados
 ├── types/           # Tipagens globais e DTOs
 ├── app.ts           # Configuração da aplicação
 └── server.ts        # Ponto de entrada
```

---

## Tecnologias Utilizadas

* Node.js + TypeScript
* Express
* JWT (jsonwebtoken)
* Bcrypt (hash de senha)
* Swagger (documentação)

---

## Como Rodar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/node-ts-template.git
cd node-ts-template
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo **.env** na raiz do projeto:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_URL=sua_string_de_conexao
```

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

### 5. Rodar em produção

```bash
npm run build
npm start
```

---

## Rodando Testes

```bash
npm run test
```

---

## Documentação da API

Acesse a documentação em:

```
http://localhost:3000/api-docs
```

---

## Endpoints Principais

### Auth

* `POST /auth/register` → Criação de usuário
* `POST /auth/login` → Login com JWT

### Users

* `GET /users` → Lista usuários
* `GET /users/:id` → Busca usuário por ID
* `PUT /users/:id` → Atualiza usuário
* `DELETE /users/:id` → Remove usuário

---

## Scripts

* `npm run dev` → Rodar em dev com Nodemon
* `npm run build` → Compilar TS para JS
* `npm start` → Rodar em produção



