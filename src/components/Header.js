import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Rick & Morty Explorer</h1>
      <p className="subtitle">Projeto 1 - Programação Web Fullstack</p>
      
      <div className="instrucoes">
        <p><strong>Vamos ver as imagens dos personagens da série Rick e Morty e descobrir se estão vivos ou mortos!</strong></p>
        <p>Pesquise um personagem no campo abaixo e descubra.</p>
      </div>
    </header>
  );
}