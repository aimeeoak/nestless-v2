import { React, useState } from 'react';
import "./SearchButton.css";

import searchbutton from "../images/search-button.png"

export default function SearchButton() {
    return (
    <div className='search button'>
      <div>
        <img src={searchbutton} class="search-button" alt="Search Button" />
      </div>
    </div>
    );
  }