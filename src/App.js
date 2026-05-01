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
      </div>
    </AppProvider>
  );
}

export default App;
