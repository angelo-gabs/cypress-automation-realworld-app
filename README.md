# Automação de testes - Real World App 

## Sobre o Projeto

Projeto de automação de testes da aplicação Real World App (RWA), desenvolvido com Cypress como parte dos estudos em automação de testes. A automação tem como foco validar fluxos principais da aplicação, incluindo autenticação de usuários, criação de conta, realização de transações financeiras e consulta de histórico de movimentações.

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js

## Cenários Automatizados

A automação cobre os principais fluxos da aplicação, incluindo:

- Autenticação de usuários (login com credenciais válidas e inválidas)
- Cadastro de novos usuários
- Realização de transações entre contas
- Validação de saldo e comportamento da aplicação em transações
- Consulta e validação do histórico de transações

## Pré-requisitos

- Node.js instalado
- Yarn instalado

## Instalação

Para instalar as dependências do projeto:

```bash
yarn
```

## Execução da aplicação

Para iniciar a aplicação localmente:

```bash
yarn dev
```

## Execução dos testes com Cypress

Para abrir o Cypress em modo interativo:

```bash
yarn cypress:open
```

Para executar os testes em modo headless:

```bash
yarn cypress:run
```

## Autor

Angelo Gabriel Costa Silveira
