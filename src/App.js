import React from 'react';
import './App.css';
import Logo from './components/Logo';
import ScanButton from './components/ScanButton';
import SearchButton from './components/SearchButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ScanButton />
        <SearchButton />
      </header>
    </div>
  );
}

export default App;
