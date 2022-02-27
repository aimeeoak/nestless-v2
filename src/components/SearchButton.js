import { React } from 'react';
import { Button } from 'react-bootstrap';
import "./SearchButton.css";
import SearchPopup from "./SearchPopup.js";
import searchbutton from "../images/search-button.png"

export default function SearchButton() {
    return (
    <Button className="button" onClick={SearchPopup}>
      <img src={searchbutton} className="search-button" alt="Search Button" />
    </Button>
    );
  }