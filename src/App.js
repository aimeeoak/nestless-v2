import React from 'react';
import 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Logo from './components/Logo';
import ScanButton from './components/ScanButton';
import SearchButton from './components/SearchButton';
import Settings from './components/Settings';
import About from "./AboutPage";
import Search from "./SearchPage";
import Results from "./ResultsPage";
import Contact from "./ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Settings />
            <Logo />
          </div>
        </header>
        <body>
          <div>
            <ScanButton />
            <SearchButton />
          </div>
        </body>
      </div>
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/results" component={Results} />
        <Route path="/contact" component={Contact} />
    </Routes>
    </Router>
  );
}

export default App;


