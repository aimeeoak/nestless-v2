import { React } from 'react';
import "./SearchButton.css";
import SearchPopup from "./SearchPopup.js";
import searchbutton from "../images/search-button.png"

export default function SearchButton() {
    return (
    <button className="button" onClick={SearchPopup}>
      <div>
        <img src={searchbutton} className="search-button" alt="Search Button" />
      </div>
    </button>
    );
  }