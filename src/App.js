import React from 'react';
import 'react-bootstrap';
import './App.css';
import Logo from './components/Logo';
import ScanButton from './components/ScanButton';
import SearchButton from './components/SearchButton';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Settings />
          <Logo />
        </div>
        <ScanButton />
        <SearchButton />
      </header>
    </div>
  );
}

export default App;
