# Projeto 1 - Programação Web Fullstack 

**Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR) - Campus Cornélio Procópio  
**Disciplina:** Programação Web Fullstack (N14)  
**Professor:** Anderson Paulo Avila Santos  
**Alunos:** Paulo Cesar Leite (RA: 2706512) e João Bosco Salviano de Carvalho (RA: XXXXXX)  
**Link da Aplicação (Deploy):** [Acessar o Rick & Morty Explorer](https://PaulinhoADS.github.io/projeto1-fullstack/)

---

## Descrição do Projeto
Single Page Application (SPA) desenvolvida em React.js que consome a API JSON do universo Rick and Morty. O projeto consolida o uso de chamadas assíncronas (AJAX/Fetch), gerenciamento de estado global com Context API e validação de formulários. 

Nesta versão final, foram aplicadas melhorias de Experiência do Usuário (UX), garantindo uma navegação fluida e intuitiva sem a necessidade de recarregamento da página. Esta aplicação servirá como base de estudos em Frontend para integração futura com uma API própria no Projeto 2.

## Tecnologias e Requisitos Atendidos
* **API JSON Aberta:** [The Rick and Morty API](https://rickandmortyapi.com/)
* **Gerenciamento de Estado:** Context API (centralizando dados e funções de manipulação de estado).
* **Biblioteca Externa:** `react-hook-form` (Utilizada para interceptar o submit, realizar a verificação de campos obrigatórios antes do envio e limpar o input).
* **Hook Adicional:** `useMemo` (Utilizado para memorizar a ordenação alfabética dos personagens retornados pela API, otimizando renderizações).
* **Estrutura de Pastas:** Restrita apenas a `src/components` e `src/contexts` conforme especificação.

## Funcionalidades
1. **Busca dinâmica** de personagens via passagem de parâmetros (`?name=`).
2. **Validação visual** de campo obrigatório antes da requisição (tratamento via front-end).
3. **Tratamento de erros** de resposta da API (ex: personagem não encontrado ou falha no servidor).
4. **Listagem em Grid ordenada** alfabeticamente com indicação visual de status (Verde para Vivo, Vermelho para Morto, Cinza para Desconhecido).
5. **Melhorias de UX (Navegação):** Painel de instruções e botão condicional "Voltar ao Início", que utiliza uma função do Contexto para resetar a pesquisa e a tela inicial instantaneamente.
6. **Rodapé padronizado** contendo os devidos créditos aos desenvolvedores e informações acadêmicas.

## Como executar o projeto localmente
```bash
# Clone o repositório
git clone https://github.com/PaulinhoADS/projeto1-fullstack.git

# Entre no diretório
cd projeto1-fullstack

# Instale as dependências
npm install

# Execute a aplicação
npm start
