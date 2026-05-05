import React, { useContext, useMemo } from 'react';
import { AppContext } from '../contexts/AppContext';

export default function CharacterList() {
  const { personagens, carregando, erroApi } = useContext(AppContext);

  // Hook adicional (useMemo). 
  // guarda a lista em ordem alfabética na memória e só recalcula se personagens mudar.
  const personagensOrdenados = useMemo(() => {
    if (!personagens) return [];
    return [...personagens].sort((a, b) => a.name.localeCompare(b.name));
  }, [personagens]);

  if (carregando) return <p>Carregando dados da API...</p>;
  if (erroApi) return <p className="error-msg">{erroApi}</p>;

  return (
    <div className="character-grid">
      {personagensOrdenados.map((char) => (
        <div key={char.id} className="card">
          <img src={char.image} alt={char.name} />
          <h4>{char.name}</h4>
          <span className={`status ${char.status}`}>{char.status}</span>
          <p>Origem: {char.origin.name}</p>
        </div>
      ))}
    </div>
  );
}
