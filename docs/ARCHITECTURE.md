# 🏛 Arquitetura

## Objetivo

A arquitetura foi projetada para privilegiar organização, escalabilidade e reutilização de componentes.

Embora este projeto seja um portfólio pessoal, sua estrutura segue práticas utilizadas em aplicações reais desenvolvidas com Next.js.

---

# Organização

```
src
│
├── app
├── components
├── data
├── hooks
├── lib
├── styles
├── types
├── utils
├── config
└── assets
```

---

# Responsabilidades

## app

Define o roteamento utilizando o App Router do Next.js.
Não deve conter regras de negócio.

---

## components

Componentes reutilizáveis.

Divididos em:

- layout
- sections
- ui
- animations
- icons

---

## data

Dados estáticos utilizados pela aplicação.

Exemplo:
Projetos
Experiências
Tecnologias

---

## hooks

Hooks personalizados.

---

## lib

Integrações e bibliotecas.

---

## utils

Funções utilitárias.

---

## config

Configurações globais.

---

## assets

Recursos locais utilizados pela aplicação.

---

# Princípios

Separação de responsabilidades.
Baixo acoplamento.
Alta reutilização.
Código previsível.
Componentes pequenos.
