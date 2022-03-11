import { React } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SearchButton.css";
import searchbutton from "../images/search-button.png"


export default function SearchButton() {
  let navigate = useNavigate();

  const SearchPage = () => {
    navigate.push('/search')
  }
  return (
  <Button className="button" onClick={SearchPage}>
    <img src={searchbutton} className="search-button" alt="Search Button" />
  </Button>
  );
};