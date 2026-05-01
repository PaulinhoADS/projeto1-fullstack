import React from 'react';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';

function App() {
  return (
    // AppProvider envolve toda a aplicação para permitir o uso da Context API
    <AppProvider>
      <div className="app-container">
        <Header />
        <SearchForm />
        <CharacterList />
        <footer>
          <p>Projeto 1 - alunos: João Bosco e Paulo C. Leite ADS turma N14 2026/1 - Disciplina Programação Web Fullstack - Professor Anderson P. Avila Santos.</p>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
