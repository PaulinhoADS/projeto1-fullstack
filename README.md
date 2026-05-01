
# Projeto 1 - Programação Web Fullstack

**Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR) - Campus Cornélio Procópio  
**Disciplina:** Programação Web Fullstack (N14)  
**Professor:** Anderson Paulo Avila Santos  
**Alunos:** Paulo Cesar Leite (RA: 2706512) e João Bosco Salviano de Cravalho (RA: XXXXXX)  
**Link da Aplicação (Deploy):** [(https://github.com/PaulinhoADS/projeto1-fullstack)]

## Descrição do Projeto
Single Page Application (SPA) desenvolvida em React.js que consome a API JSON do universo Rick and Morty. O projeto consolida o uso de chamadas assíncronas (AJAX/Fetch), gerenciamento de estado global com Context API e validação de formulários.

Esta aplicação servirá como base de estudos em Frontend para integração futura com uma API própria no Projeto 2.

## Tecnologias e Requisitos Atendidos
* **API JSON Aberta:** [The Rick and Morty API](https://rickandmortyapi.com/)
* **Gerenciamento de Estado:** Context API
* **Biblioteca Externa:** `react-hook-form` (Utilizada para interceptar o submit e realizar a verificação de campos obrigatórios antes do envio).
* **Hook Adicional:** `useMemo` (Utilizado para memorizar a ordenação alfabética dos personagens retornados pela API, otimizando renderizações).
* **Estrutura de Pastas:** Restrita apenas a `src/components` e `src/contexts` conforme especificação.

## Funcionalidades
1. Busca dinâmica de personagens via passagem de parâmetros (`?name=`).
2. Validação visual de campo obrigatório antes da requisição.
3. Tratamento de erros de resposta da API (ex: personagem não encontrado).
4. Listagem em Grid ordenada com indicação visual de status (Vivo, Morto, Desconhecido).

## Como executar o projeto localmente
```bash
# Clone o repositório
git clone [https://github.com/PaulinhoADS/projeto1-fullstack.git](https://github.com/PaulinhoADS/projeto1-fullstack.git)

# Entre no diretório
cd projeto1-fullstack

# Instale as dependências
npm install

# Execute a aplicação
npm start