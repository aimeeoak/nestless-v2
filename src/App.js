import React from "react";
import "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import ScanButton from "./components/ScanButton";
import SearchButton from "./components/SearchButton";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Settings />
          <Logo />
        </div>
        <div>
          <ScanButton />
        </div>
        <div>
          <SearchButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
