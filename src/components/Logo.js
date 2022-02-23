import { React, useState } from 'react';
import "./Logo.css";

import logo from "../images/logo.png"

export default function Logo() {
  return (
  <div className='logo'>
    <div>
      <img src={logo} class="logo" alt="Nestless Logo" />
    </div>
  </div>
  );
} 
