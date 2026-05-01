import React, { createContext, useState } from 'react';

// Criação do Contexto para compartilhar os dados com a aplicação toda
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erroApi, setErroApi] = useState('');

  // Limpa a busca para simular o botão "Voltar"
  const limparBusca = () => {
    setPersonagens([]);
    setErroApi('');
  };

  // Função assíncrona que consome a API JSON com envio de parâmetros
  const buscarPersonagens = async (nome) => {
    setCarregando(true);
    setErroApi(''); // Limpa erros antigos antes da nova busca
    setPersonagens([]);

    try {
      // AJAX com fetch buscando pelo nome digitado
      const resposta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`);
      const dados = await resposta.json();

      if (dados.error) {
        // Validação depois do envio (API não encontrou)
        setErroApi('Personagem não encontrado. Tente outro nome.');
      } else {
        setPersonagens(dados.results);
      }
    } catch (error) {
      setErroApi('Erro de conexão com o servidor.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <AppContext.Provider value={{ personagens, carregando, erroApi, buscarPersonagens, limparBusca }}>
      {children}
    </AppContext.Provider>
  );
}