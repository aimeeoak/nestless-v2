import React from "react";
import "react-bootstrap";
import "./App.css";
import Logo from "./components/Logo";
import ScanButton from "./components/ScanButton";
import SearchButton from "./components/SearchButton";
import Settings from "./components/Settings";

function App() {
  return (
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
  );
}

export default App;
